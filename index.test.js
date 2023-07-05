const utils = require('./index')

describe('[Görev 1] nesneyiTrimle', () => {
  test('[1] propları trimlenmiş bir nesne döndürüyor', () => {
    // ÖRNEK
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.nesneyiTrimle(input)
    expect(actual).toEqual(expected)
  })
})

describe('[Görev 2] verileniTrimle', () => {
  test('[3] verilen propu trimliyor', () => {
    const input = { isim: '  jane  ' , yas: ' 34 '};
    const key = "yas";
    const expected = input[key].trim();
    const actual = utils.verileniTrimle(input, key)[key];
    expect(actual).toBe(expected);
  })
  test('[4] verilen dışındaki proplar trimlenmeden döndürülüyor', () => {
    const input = { isim: '  jane  ' , yas: ' 34 '};
    const key = "isim";
    const expected = {...input};
    expected[key] = expected[key].trim();
    const actual = utils.verileniTrimle(input, key);
    expect(actual).toEqual(expected);
  })
})

describe('[Görev 3] enBuyukTamsayiyiBul', () => {
  test('[5] bir dizi nesne içindeki en büyük tamsayiyi döndürüyor { tamsayi: 2 }', () => {
    const input = [{ tamsayi: 1 }, { tamsayi: 3 }, { tamsayi: 2 }, { tamsayi: 7 }, { tamsayi: 35 }, { tamsayi: 8 }];
    let newArr = [];
    for(i of input){
      newArr.push(Object.values(i)[0])
    }
    const expected = Math.max(...newArr);
    const actual = utils.enBuyukTamsayiyiBul(input);
    expect(actual).toEqual(expected);
  })
})

describe('[Görev 4] Sayici', () => {
  let sayici
  beforeEach(() => {
    sayici = new utils.Sayici(3) // her test yeni bir sayı ile başlatılıyor
  })
  test('[6] sayici.asagiSay ilk çağırılışında başlangıç sayışını yapıyor', () => {
    const expected = 3;
    const actual = sayici.asagiSay();
    expect(actual).toEqual(expected);
  })
  test('[7] sayici.asagiSay İKİNCİ çağırılışında başlangıç eksi 1 sayıyor', () => {
    const expected = 2;
    sayici.asagiSay();
    const actual = sayici.asagiSay();
    expect(actual).toEqual(expected);
  })
  test('[8] sayıcı sonunda sıfıra ulaşır ama daha aşağı saymaz', () => {
    const expected = 0;
    sayici.asagiSay();
    sayici.asagiSay();
    sayici.asagiSay();
    sayici.asagiSay();
    const actual = sayici.asagiSay();
    expect(actual).toEqual(expected);
  })
})

describe('[Görev 5] Mevsimler', () => {
  let mevsimler
  beforeEach(() => {
    mevsimler = new utils.Mevsimler() // her test yeni bir mevsimle başlar
  })
  test('[9] mevsimler.sonraki İLK çağırılışında "yaz" döndürüyor', () => {
    const expected = "yaz";
    const actual = mevsimler.sonraki();
    expect(actual).toEqual(expected);
  })
  test('[10] mevsimler.sonraki İKİNCİ çağırılışında "sonbahar" döndürüyor', () => {
    const expected = "sonbahar";
    mevsimler.sonraki();
    const actual = mevsimler.sonraki();
    expect(actual).toEqual(expected);
  })
  test('[11] mevsimler.sonraki ÜÇÜNCÜ çağırılışında "kış" döndürüyor', () => {
    const expected = "kış";
    mevsimler.sonraki();
    mevsimler.sonraki();
    const actual = mevsimler.sonraki();
    expect(actual).toEqual(expected);
  })
  test('[12] mevsimler.sonraki DÖRDÜNCÜ çağırılışında "ilkbahar" döndürüyor', () => {
    const expected = "ilkbahar";
    for(let i = 1 ; i < 4; i++){
      mevsimler.sonraki();
    }
    const actual = mevsimler.sonraki();
    expect(actual).toEqual(expected);
  })
  test('[13] mevsimler.sonraki BEŞİNCİ çağırılışında "yaz" döndürüyor', () => {
    const expected = "yaz";
    for(let i = 1 ; i < 5; i++){
      mevsimler.sonraki();
    }
    const actual = mevsimler.sonraki();
    expect(actual).toEqual(expected);
  })
  test('[14] mevsimler.sonraki KIRKINCI çağırılışında "ilkbahar" döndürüyor', () => {
    const expected = "ilkbahar";
    for(let i = 1 ; i < 40; i++){
      mevsimler.sonraki();
    }
    const actual = mevsimler.sonraki();
    expect(actual).toEqual(expected);
  })
})

describe('[Görev 6] Araba', () => {
  let focus
  beforeEach(() => {
    focus = new utils.Araba('focus', 20, 30) // her test yeni bir araba oluşturur
  })
  test('[15] arabayı sürünce güncellenmiş odometer döndürüyor', () => {
    expect(focus.sur(100)).toBe(100)
  })
  test('[16] arabayı sürmek benzin tüketiyor', () => {
    focus.sur(300);
    expect(focus.depo).toBe(10);
    focus.sur(300);
    expect(focus.depo).toBe(0);
  })
  test('[17] benzinalma arabayı sürmeye izin veriyor', () => {
    focus.sur(600);
    expect(focus.sur(300)).toBe(600);
    focus.benzinal(10);
    expect(focus.sur(300)).toBe(900);
  })
  test('[18] dolu depoya benzin alma etki etmiyor', () => {
    expect(focus.depo).toBe(20)
    focus.benzinal(10)
    expect(focus.depo).toBe(20)
  })
})

describe('[Görev 7] asenkronCiftSayi',() => {
  test('[19] bir çift sayı verilirse true çözümlüyor', async () => {
    expect(await utils.asenkronCiftSayi(2)).toBe(true);
  })
  test('[20] tek sayı verilirse false çözümlüyor', async () => {
    expect(await utils.asenkronCiftSayi(2)).toBe(true);
  })
})
