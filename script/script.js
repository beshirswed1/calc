function validateForm(event) {
    event.preventDefault();
    let valid = true;

    // الاسم
    const name = document.getElementById('input-name').value.trim();
    const errorName = document.getElementById('error-name');
    if (name.length < 3) {
        errorName.textContent = 'اسمك صغير مينفش ياقلبي';
        valid = false;
    } else if (name.length > 15) {
        errorName.textContent = 'اسمك كبير مينفش ياقلبي';
        valid = false;
    } else {
        errorName.textContent = '';
    }

const email = document.getElementById('input-email').value.trim();
const errorEmail = document.getElementById('error-email');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (email.length > 30) {
    errorEmail.textContent = 'الايميل كبير مينفش ياقلبي';
    valid = false;
} else if (!emailRegex.test(email)) {
    errorEmail.textContent = 'الايميل غير صحيح مينفش ياقلبي';
    valid = false;
} else {
    errorEmail.textContent = '';
}

    // رقم الهاتف
    const phone = document.getElementById('input-phone').value.trim();
    const errorPhone = document.getElementById('error-phone');
    if (!/^\d+$/.test(phone)) {
        errorPhone.textContent = 'رقم الهاتف يجب أن يحتوي على أرقام فقط';
        valid = false;
    } else if (phone.length < 10) {
        errorPhone.textContent = 'رقم الهاتف صغير مينفش ياقلبي';
        valid = false;
    } else if (phone.length > 15) {
        errorPhone.textContent = 'رقم الهاتف كبير مينفش ياقلبي';
        valid = false;
    } else {
        errorPhone.textContent = '';
    }

    // الشهر واليوم والسنة
    const month = document.getElementById('input-month').value;
    const day = parseInt(document.getElementById('input-day').value, 10);
    const year = parseInt(document.getElementById('input-year').value, 10);
    const errorMonth = document.getElementById('error-month');
    const errorDay = document.getElementById('error-day');
    const errorYear = document.getElementById('error-year');
    errorMonth.textContent = '';
    errorDay.textContent = '';
    errorYear.textContent = '';
    if (!month) {
        errorMonth.textContent = 'اختر الشهر';
        valid = false;
    }
    if (!day || day < 1 || day > 31) {
        errorDay.textContent = 'اختر اليوم بشكل صحيح';
        valid = false;
    }
    if (!year || year < 1900 || year > 2100) {
        errorYear.textContent = 'اختر السنة بشكل صحيح';
        valid = false;
    }
    // تحقق من اليوم مع الشهر والسنة
    if (month && day && year) {
        const [y, m] = month.split('-');
        const d = new Date(year, m - 1, day);
        if (d.getFullYear() != year || d.getMonth() != m - 1 || d.getDate() != day) {
            errorDay.textContent = 'اليوم غير صحيح بالنسبة للشهر والسنة';
            valid = false;
        }
    }

    // كلمة المرور
    const pass = document.getElementById('input-pass').value;
    const errorPass = document.getElementById('error-pass');
    if (pass.length < 6) {
        errorPass.textContent = 'كلمة المرور صغيرة مينفش ياقلبي';
        valid = false;
    } else if (pass.length > 12) {
        errorPass.textContent = 'كلمة المرور كبيرة مينفش ياقلبي';
        valid = false;
    } else {
        errorPass.textContent = '';
    }

    // تأكيد كلمة المرور
    const nPass = document.getElementById('input-n-pass').value;
    const errorNPass = document.getElementById('error-n-pass');
    if (pass !== nPass) {
        errorNPass.textContent = 'كلمة المرور غير متطابقة مينفش ياقلبي';
        valid = false;
    } else {
        errorNPass.textContent = '';
    }

    if (valid) {
        alert('تم التسجيل بنجاح!');
        document.getElementById('form').reset();
    }
}