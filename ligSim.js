class Takim{

    constructor(isim,guc){
      this.isim = isim;
      this.guc = guc;
      this.galibiyetSay = 0;
      this.beraberlikSay=0;
      this.yenilgiSay=0;
      this.atilanGol=0;
      this.yenenGol=0;
      this.oynananMac = 0;
      this.puan = 0;
      this.averaj = 0;
    }

    puanHesapla(){
       return this.puan = (this.galibiyetSay*3)+this.beraberlikSay;
    }
    averajHesapla(){
      return this.averaj = this.atilanGol-this.yenenGol;
    }
    yazdir(){

      console.log("Takım adı: "+this.isim + " Takımın Gücü: "+this.guc+" Takımın galibiyet sayısı: "+this.galibiyetSay);

    }
    golAt()
    {
      ++this.atilanGol;
    }
    golYe()
    {
      ++this.yenenGol;
    }

    galibiyet(){
      return ++this.galibiyetSay;
    }
    berabere(){
      return ++this.beraberlikSay;
    }
    yenilgiHesapla()
    {
      return this.yenilgiSay = this.oynananMac - (this.galibiyetSay+this.beraberlikSay);
      //Maç sonunda kazanan takımı tuttuğumuz için yenilgiyi böyle hesapladık
    }
    macYap()
    {
      ++this.oynananMac;
    }
}
const takimlar = [
  {
    isim : "Başakşehir ",
    guc : 4
  },
  {
    isim : "Galatasaray",
    guc : 9
  },
  {
    isim : "Beşiktaş   ",
    guc : 8
  },
  {
    isim : "Malatyaspor",
    guc : 2
  },
  {
    isim : "Antalyaspor",
    guc : 4
  },
  {
    isim : "Trabzonspor",
    guc : 7
  },
  {
    isim : "Konyaspor  ",
    guc : 4
  },
  {
    isim : "Rizespor   ",
    guc : 2
  },
  {
    isim : "Kayserispor",
    guc : 4
  },
  {
    isim : "Kasımpaşa  ",
    guc : 1
  },
  {
    isim : "Ankaragücü ",
    guc : 1
  },
  {
  isim : "Erzurum BB ",
  guc : 1
  },
  {
  isim : "AkhisarSpor",
  guc : 1
  },
  {
    isim : "Fenerbahçe ",
    guc : 9
  },
  {
    isim : "Sivasspor  ",
    guc : 4
  },
  {
    isim : "Göztepe    ",
    guc : 2
  },
  {
    isim : "Alanyaspor ",
    guc : 3
  },
  {
    isim : "Bursaspor  ",
    guc : 6
  }
];
function takimlariOlustur(takimListesi)
{
  let i=0;
  takimListesi.forEach(function(element){
  takimListesi[i] = new Takim(takimListesi[i].isim,takimListesi[i].guc);
  i++;
});
}
function takimlariYazdir(takimListesi)
{
  let i= 0;
   takimListesi.forEach(function(element){
    takimListesi[i].yazdir();
    i++;
  })
}
function fiksturOlustur(takimListesi)
{
  let karsilasmalar=[];
  let takimSayisi = takimListesi.length-1;
  for(let i = 0;i<takimSayisi;i++){
    for(let j = takimSayisi;j>i;j--){
    let karsilasma = {evSahibi: takimListesi[i] , deplasman : takimListesi[j]};
    karsilasmalar.push(karsilasma);
    }
  }
  return karsilasmalar;
}
function ilkYariMaclariOyna(fikstur)
{
  let evSahibiZari;
  let deplasmanZari;
  let evSahibiGol=0;
  let deplasmanGol=0;
  let i=0;
  let kazanan;
  fikstur.forEach(function(element){
  let evSahibi = fikstur[i].evSahibi;
  let deplasman = fikstur[i].deplasman;
  evSahibi.macYap();
  deplasman.macYap();
  //console.log("Maç oynanıyor \n"+ "Ev sahibi takım: "+evSahibi.isim+" Takım Gücü: "+evSahibi.guc+
  //"\nDeplasman takımı: "+deplasman.isim+" Takım Gücü: "+deplasman.guc);
  let toplamGol = Math.floor(Math.random() * 11); //max 10 gol olabileceğini varsaydık
  if(toplamGol == 0)
  {
    evSahibi.berabere();
    deplasman.berabere();
    //console.log("Maç berabere bitti.\n"+" 0 "+evSahibi.isim+" : "+deplasman.isim+" 0 "  );
  }
  else
  {
    for(let j = 0; j<toplamGol;j++)
    {
    evSahibiZari = zarAt(evSahibi.guc+2,deplasman.guc);
    deplasmanZari = zarAt(deplasman.guc,evSahibi.guc+2);
    if(evSahibiZari > deplasmanZari)
    {
      evSahibiGol++;
      evSahibi.golAt();
      deplasman.golYe();
    }
    else
    {
      deplasmanGol++;
      deplasman.golAt();
      evSahibi.golYe();
    }
   }
   if(evSahibiGol == deplasmanGol)
   {
     evSahibi.berabere();
     deplasman.berabere();
     //console.log("Maç berabere bitti.\n"+" "+evSahibiGol+" "+evSahibi.isim+" : "+deplasman.isim+" "+deplasmanGol+" "  );
   }
   else
   {
     kazanan = evSahibiGol > deplasmanGol ? evSahibi : deplasman
     kazanan.galibiyet();
     kazanan.puanHesapla();
     //console.log(kazanan.isim+" Kazandı!.\n"+evSahibiGol+" "+evSahibi.isim+" : "+deplasman.isim+" "+deplasmanGol+" "  );
     //console.log("Kazanan: "+ kazanan.isim+" galibiyet sayısı: "+ kazanan.galibiyetSay+" puan: "+ kazanan.puanHesapla());

   }
  }
  i++;

  evSahibiGol=0;
  deplasmanGol=0;
  })

}
function ikinciYariMaclariOyna(fikstur)
{
  let evSahibiZari;
  let deplasmanZari;
  let evSahibiGol=0;
  let deplasmanGol=0;
  let i=0;
  let kazanan;
  fikstur.forEach(function(element){
  let evSahibi = fikstur[i].evSahibi;
  let deplasman = fikstur[i].deplasman;
  evSahibi.macYap();
  deplasman.macYap();
  //console.log("Maç oynanıyor \n"+ "Ev sahibi takım: "+evSahibi.isim+" Takım Gücü: "+evSahibi.guc+
  //"\nDeplasman takımı: "+deplasman.isim+" Takım Gücü: "+deplasman.guc);
  let toplamGol = Math.floor(Math.random() * 11); //max 10 gol olabileceğini varsaydık
  if(toplamGol == 0)
  {
    evSahibi.berabere();
    deplasman.berabere();
    //console.log("Maç berabere bitti.\n"+" 0 "+evSahibi.isim+" : "+deplasman.isim+" 0 "  );
  }
  else
  {
    for(let j = 0; j<toplamGol;j++)
    {
    evSahibiZari = zarAt(evSahibi.guc,deplasman.guc);
    deplasmanZari = zarAt(deplasman.guc+2,evSahibi.guc);
    // Bütün fikstürü değiştirmek yerine avantajlı tarafı değiştirip işlem yükünden kurtulduk.
    if(evSahibiZari > deplasmanZari)
    {
      evSahibiGol++;
      evSahibi.golAt();
      deplasman.golYe();
    }
    else
    {
      deplasmanGol++;
      deplasman.golAt();
      evSahibi.golYe();
    }
   }
   if(evSahibiGol == deplasmanGol)
   {
     evSahibi.berabere();
     deplasman.berabere();
     //console.log("Maç berabere bitti.\n"+" "+evSahibiGol+" "+evSahibi.isim+" : "+deplasman.isim+" "+deplasmanGol+" "  );
   }
   else
   {
     kazanan = evSahibiGol > deplasmanGol ? evSahibi : deplasman
     kazanan.galibiyet();
     kazanan.puanHesapla();
     //console.log(kazanan.isim+" Kazandı!.\n"+evSahibiGol+" "+evSahibi.isim+" : "+deplasman.isim+" "+deplasmanGol+" "  );
     //console.log("Kazanan: "+ kazanan.isim+" galibiyet sayısı: "+ kazanan.galibiyetSay+" puan: "+ kazanan.puanHesapla());

   }
  }
  i++;

  evSahibiGol=0;
  deplasmanGol=0;
  })

}
function zarAt(zarAtanGuc,guc2)
{
  /*
    Başta fikir iki tarafın da kendi gücü sayısınca zar atmasıydı. Böylece gücü
    8 olan bir takım gücü 4 olan takıma göre 2 kat fazla sefer zar atmış olacaktı.
    ancak pratikte yıl sonu puanlamasında çok güçlü takımların şampiyon olma yüzdesi
    yeterince fazla değildi. Bu sebeple FRP oyunlarındaki gibi zarlarına ek puan ekledim.
    Güçlü olan taraf (Güçlü/zayıf) kadar zarına ek puan alıyor.
    yani gücü 9 zarı 6 , gücü 4 zarı 7 olan iki takım için
    9//4 = 2 => 6+2 = 8 şeklinde güçlünün son zarı 8 oluyor.
    Bu algoritma ile güçlü takımlar daha fazla şampiyon olurken birkaç denemeden sonra
    gücü 2 olan takımların bile şampiyon olabildiğini gördüm. Gerçek Türkiye liginde de sonuç
    aşağı yukarı bu şekilde.
  */
  let max = 0;
  let zar;
  let avantaj = zarAtanGuc/guc2
  if (avantaj > 1)
  {
    avantaj = Math.floor(avantaj);
  }
  for(let i = 0;i<zarAtanGuc;i++)
  {
    zar = Math.random()*10;
    if(zar == 9) return 10;
    max = zar>max ? zar:max;
  }
  return zar+avantaj;

}

takimlariOlustur(takimlar);
const fikstur = fiksturOlustur(takimlar);
ilkYariMaclariOyna(fikstur);
ikinciYariMaclariOyna(fikstur);
let i = 0;
takimlar.sort(function(a,b){
  return  b.puanHesapla() - a.puanHesapla();
});
console.log("  Takım Adı | Puan |   Galibiyet | Beraberlik | Mağlubiyet | Atılan Gol |"+"  "+" Yenen Gol |   Averaj | ");
takimlar.forEach(function(element)
{
  takim = takimlar[i];
  /*console.log(takim.isim+ "Oynanan Maç : "+takim.oynananMac+" Galibiyet: "+takim.galibiyetSay+
  " Mağlubiyet: "+ takim.yenilgiSay+" Beraberlik: "+ takim.beraberlikSay+
   " Atılan Gol: "+ takim.atilanGol+ " Yenen Gol: "+ takim.yenenGol+
  " Puan: "+takim.puanHesapla() + " Averaj: "+takim.averajHesapla() )*/

  console.log((i+1)+" "+takim.isim+ "  "+ takim.puanHesapla() +"           "+takim.galibiyetSay+"        "+ takim.beraberlikSay+"            "+
  takim.yenilgiHesapla()+"            "+takim.atilanGol+"             "+
takim.yenenGol+"         "+takim.averajHesapla()+"   ");
  i++;
});
