function toggleMenu() {  
    const menu = document.querySelector('.list');  
    const menuBtn = document.querySelector('.menu-btn');  
    menu.classList.toggle('active'); // تبديل إظهار وإخفاء القائمة  
    menuBtn.classList.toggle('active'); // تبديل حالة زر القائمة  
}
document.addEventListener('DOMContentLoaded', () => {
    const showCouponBtn = document.getElementById('showCouponBtn');
    const coupon = document.getElementById('coupon');

    showCouponBtn.addEventListener('click', () => {
        if (coupon.classList.contains('hidden')) {
            coupon.classList.remove('hidden');
        } else {
            coupon.classList.add('hidden');
        }
    });
});