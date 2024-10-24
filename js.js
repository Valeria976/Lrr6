document.getElementById('delating').addEventListener('click', function() {
    // Отримуємо значення рядка S1 та підрядка S2
    let s1 = document.getElementById('string').value;
    let s2 = document.getElementById('substring').value;

    // Якщо підрядок не порожній, видаляємо всі його входження
    if (s2 !== '') {
        s1 = s1.split(s2).join('');
    }

    // Виводимо результат
    document.getElementById('result').textContent = "Result: " + s1;
});
