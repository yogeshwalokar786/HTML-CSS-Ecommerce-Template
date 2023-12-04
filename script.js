// Script for navigation bar
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

// Product Quantity
$(document).ready(function () {
    $('.qty-btn').on('click', function () {
        var $this = $(this);
        var $input = $this.siblings('input');
        var oldValue = parseFloat($input.val());

        if ($this.hasClass('plus')) {
            var newVal = oldValue + 1;
        } else {
            // Don't allow decrementing below one
            var newVal = Math.max(oldValue - 1, 1);
        }

        $input.val(newVal);
    });
});