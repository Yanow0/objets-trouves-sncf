$(function () {


    $("#gare").autocomplete({
        source: function (request, response) {
            $.ajax({
                url: "https://ressources.data.sncf.com/api/records/1.0/search/?dataset=liste-des-gares&q=" + request.term + "&fields=libelle",
                dataType: "jsonp",

                success: function (data) {
                    //console.log(data.records);

                    var res = [];
                    data.records.forEach(function (record) {
                        //console.log(record);
                        if (!res.includes(record.fields.libelle)) {
                            res.push(record.fields.libelle);
                        }
                    });
                    response(res);
                    // console.log(res);
                }
            });
        },
        minLength: 2,
    });

    $("#rechercher").on('click', function () {

        var gare = $("#gare").val();
        var type = $("#type").val();
        var date = $("#date").val();


        if (date == '') {
            var toastDate = new bootstrap.Toast($('#toast-date'));
            toastDate.show();
        } else {

            if (gare == '') {
                $.ajax({
                    url: "https://ressources.data.sncf.com/api/records/1.0/search/?dataset=objets-trouves-restitution&facet=gc_obo_date_heure_restitution_c,gc_obo_nature_c,gc_obo_type_c,gc_obo_nom_recordtype_sc_c,refine.gc_obo_gare_origine_r_code_uic_c&refine.date=" + date + "&q=" + type + "&rows=20",
                    dataType: "jsonp",
                    success: function (res) {

                        if (res.nhits == 0) {
                            $('#results span').removeClass('d-none');
                            $('#results table').addClass('d-none');
                        } else {
                            $('#results span').addClass('d-none');
                            $('#results table').removeClass('d-none');

                            $('#results table tbody').empty();
                            res.records.forEach(function (record) {

                                let date = new Date(record.fields.date);
                                let dateLocale = date.toLocaleString('fr-FR',{
                                    weekday: 'long',
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                    hour: 'numeric',
                                    minute: 'numeric',
                                    second: 'numeric'});

                                $('#results table tbody').append(
                                    '<tr>' +
                                    '<td>' + record.fields.gc_obo_gare_origine_r_name + '</td>' +
                                    '<td>' + dateLocale + '</td>' +
                                    '<td>' + record.fields.gc_obo_type_c + '</td>' +
                                    '<td>' + record.fields.gc_obo_nature_c + '</td>' +
                                    '</tr>');

                            });

                        }

                        window.scrollTo(0, document.body.scrollHeight);
                    }
                });
            } else {

                $.ajax({
                    url: "https://ressources.data.sncf.com/api/records/1.0/search/?dataset=liste-des-gares&q=" + gare + "&fields=code_uic&rows=1",
                    dataType: "jsonp",

                    success: function (data) {
                        if (data.records[0]) {
                            //console.log(data.records[0].fields.code_uic);
                            var code_gare = data.records[0].fields.code_uic;
                            code_gare = '00' + code_gare;
                            //console.log(code_gare);

                            $.ajax({
                                url: "https://ressources.data.sncf.com/api/records/1.0/search/?dataset=objets-trouves-restitution&facet=gc_obo_date_heure_restitution_c,gc_obo_nature_c,gc_obo_type_c,gc_obo_nom_recordtype_sc_c,refine.gc_obo_gare_origine_r_code_uic_c&refine.gc_obo_gare_origine_r_code_uic_c=" + code_gare + "&refine.date=" + date + "&q=" + type + "&rows=20",
                                dataType: "jsonp",
                                success: function (res) {

                                    if (res.nhits == 0) {
                                        $('#results div').removeClass('d-none');
                                        $('#results table').addClass('d-none');
                                    } else {
                                        $('#results div').addClass('d-none');
                                        $('#results table').removeClass('d-none');

                                        $('#results table tbody').empty();
                                        res.records.forEach(function (record) {



                                            let date = new Date(record.fields.date);
                                            let dateLocale = date.toLocaleString('fr-FR',{
                                                weekday: 'long',
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric',
                                                hour: 'numeric',
                                                minute: 'numeric',
                                                second: 'numeric'});



                                            $('#results table tbody').append(
                                                '<tr>' +
                                                '<td>' + record.fields.gc_obo_gare_origine_r_name + '</td>' +
                                                '<td>' + dateLocale + '</td>' +
                                                '<td>' + record.fields.gc_obo_type_c + '</td>' +
                                                '<td>' + record.fields.gc_obo_nature_c + '</td>' +
                                                '</tr>');

                                        });

                                    }

                                    window.scrollTo(0, document.body.scrollHeight);
                                }
                            });

                        }
                    }
                });
            }

        }


    });
});

