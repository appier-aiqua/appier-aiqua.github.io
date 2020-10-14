$(function() {
    
    $(document).on('click', '#search_button', function() {
        search();
    });
    $(document).on('keypress', '#input_word', function(e) {
        if (e.which === 13) {
            e.preventDefault();
            search();
        }
    });
    function search() {
        $('#word').val($('#input_word').val());
        $('#search_form').submit();
    }

    $('#contact_button').on('click', function() {
        if (!$(this).parent().hasClass('js__modalTrigger')) {
            location.href = $('#contact_link').val();
        }
    });

    var targets = ['.product__info__text .title','.outline', '.text'];
    for (var i=0; i<targets.length;i++) {
        $(targets[i]).not('.item-question .text, .product__company__inner .text').each(function() {
            var html = $(this).html();
            if (html) {
                replace = html.replace(/((https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi, function($1) {
                    if ($1.match(document.domain)) {
                        return '<a href="' + $1 + '">' + $1 + '</a>';
                    } else {
                        return '<a href="' + $1 + '" target="_blank">' + $1 + '</a>';
                    }
                });
                $(this).html(replace);
            }
        });
    }
    var download_path = $('#catalog_one_download_path').val();
    $('.catalog_download').on('click', function() {
        var file_name = $(this).data('filename');
        var url = download_path.replace('file_name', file_name);
        $.post(
            url,{_token:$('meta[name="csrf-token"]').attr('content')
        }).fail( (data) => {
            console.log(data);
        });
    });

    $('#online_business_card_submit').on('click', function() {
        var url = $('#online_business_card_url').val();
        var message = $('#online_business_card_message').val();
        var check = $('#consensCheck').prop('checked');
        
        if ($('#online_business_card_url').hasClass('is-error') ||
            $('#online_business_card_message').hasClass('is-error') ||
            $('#consensCheck').hasClass('is-error') ||
            !check) {
            return true;
        }

        $('#online_business_card_submit').prop('disabled', true);

        $.post({
            url:$('#online_business_card_path').val(),
            data: {
                    _token:$('meta[name="csrf-token"]').attr('content'),
                    business_card_url: url,
                    business_card_message: message,
                    consens_check: check,
                },
            dataType: 'json',
            responseType: 'json',
        }).done( (data) => {
            $('#online_business_card_url').val('');
            $('#online_business_card_message').val('');
            $('#consensCheck').prop('checked', false);

            globalComponents.modal.open($('#online_business_card_done'));
            globalComponents.modal.close($('#online_business_card'));
        }).fail( (data) => {
            if (data.status == 422) {
                var responseText = JSON.parse(data.responseText);
                var errors = responseText.errors;
                if (errors['business_card_url']) {
                    $('#online_business_card_url').addClass('is-error');
                    $('#online_business_card_url').parent().addClass('is-error');
                    $('#online_business_card_url').next().text(errors['business_card_url']);
                }
                if (errors['business_card_message']) {
                    $('#online_business_card_message').addClass('is-error');
                    $('#online_business_card_message').parent().addClass('is-error');
                    $('#online_business_card_message').next().text(errors['business_card_message']);
                }
                if (errors['consens_check']) {
                    $('#consensCheck').addClass('is-error');
                    $('#consensCheck').parents('div.js__requiredWrap').addClass('is-error');
                    $('#consensCheck').parents('div.js__requiredWrap').find('p.js__error-text').text(errors['consens_check']);
                }

            }
            else {
                alert('リクエストに失敗しました。');
            }
        }).always(()=> {
            $('#online_business_card_submit').prop('disabled', false);
        });

    });
});

