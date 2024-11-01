Feature('Menyukai Restoran');

Scenario('Menyukai restoran', async ({ I }) => {
  // Langsung akses halaman detail restoran
  I.amOnPage('http://localhost:8080/#/detail/rqdv5juczeskfw1e867');

  // Tunggu hingga tombol like muncul
  I.waitForElement('#likeButton', 5);

  // Klik tombol like untuk menyukai restoran
  I.click('#likeButton');

  // Memastikan tombol berubah menjadi "unlike"
  I.seeElement({ css: '#likeButton[aria-label="unlike this restaurant"]' });
});

Scenario('Membatalkan menyukai restoran', async ({ I }) => {
  // Langsung akses halaman detail restoran
  I.amOnPage('http://localhost:8080/#/detail/rqdv5juczeskfw1e867');

  // Tunggu hingga tombol like muncul
  I.waitForElement('#likeButton', 5);

  // Jika tombol belum dalam status unlike, klik untuk menyukai dulu
  if (
    (await I.grabAttributeFrom('#likeButton', 'aria-label')) ===
    'like this restaurant'
  ) {
    I.click('#likeButton');
    I.waitForElement('#likeButton[aria-label="unlike this restaurant"]', 5);
  }

  // Klik untuk membatalkan suka
  I.click('#likeButton');

  // Memastikan tombol kembali ke status awal "like"
  I.waitForElement('#likeButton[aria-label="like this restaurant"]', 5);
});
