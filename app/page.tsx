import Link from 'next/link';
import {ArrowRight,Headphones,Search,Globe2,Plane,LockKeyhole,CreditCard,Smartphone} from 'lucide-react';
import {Shell,DestinationCard} from '../components/Site';

const destinations=[
 ['Türkiye','Istanbul','TR','4.00','photo-1524231757912-21f4fe3a7200'],
 ['İtalya','Rome','IT','4.00','photo-1529260830199-42c24126f198'],
 ['Fransa','Paris','FR','4.00','photo-1502602898657-3e91760cbb34'],
 ['Japonya','Tokyo','JP','4.00','photo-1540959733332-eab4deabeeaf'],
 ['ABD','New York','US','4.00','photo-1485871981521-5b1fd3805eee'],
 ['BAE','Dubai','AE','5.00','photo-1512453979798-5ea266f8880c']
];
export default function Home(){return <Shell><main className="refHome">
<section className="refTop">
 <div className="refHero">
  <img className="refHeroBg" alt="" src="https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1800&q=90"/>
  <div className="refHeroShade"/>
  <div className="refCopy"><h1>Dünyayı<br/><em>bağlantıda</em><br/>keşfet</h1><p>200+ ülkede uygun fiyatlı eSIM paketleriyle<br/>seyahatinin her anında çevrimiçi kalın.</p>
   <div className="refSearch"><Search/><input placeholder="Gideceğiniz ülke veya bölgeyi arayın"/><Link href="/esim"><Search/></Link></div>
   <div className="refPopular"><b>Popüler aramalar:</b><span>🇹🇷 Türkiye</span><span>🇮🇹 İtalya</span><span>🇺🇸 ABD</span><span>🇯🇵 Japonya</span><span>🇦🇪 Dubai</span></div>
  </div>
 </div>
 <aside className="refSide">
  <article className="freedom"><img alt="" src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1000&q=88"/><div><h2>Seyahat özgürlüğü<br/>artık daha yakın</h2><p>Nordic eSIM ile dünyanın her yerinde hızlı, güvenli ve uygun fiyatlı internete bağlanın.</p><Link href="/esim">Paketleri Keşfet <ArrowRight/></Link></div></article>
  <div className="miniFeatures"><span><Plane/>Seyahat Kolaylığı</span><span><Globe2/>Güvenilir Ağlar</span><span><LockKeyhole/>Güvenli Bağlantı</span></div>
  <article className="appPromo"><div><h2>Nordic eSIM Uygulaması</h2><p>Seyahatlerinizi kolayca yönetin, paket satın alın ve kullanımınızı takip edin.</p><div className="stores"><b> App Store'dan</b><b>▶ Google Play</b></div></div><Smartphone/></article>
 </aside>
</section>
<section className="refBenefits"><span>⚡<b>Anında Bağlan</b><small>Dakikalar içinde aktif</small></span><span>◆<b>Uygun Fiyatlar</b><small>Gizli ücret yok</small></span><span>◎<b>200+ Ülke</b><small>Dünya çapında kapsama</small></span><span><Headphones/><b>7/24 Destek</b><small>Her zaman yanınızda</small></span></section>
<section className="refMainGrid">
 <div className="refLeft">
  <div className="refHeading"><h2>Popüler Destinasyonlar</h2><Link href="/esim">Tümünü Gör <ArrowRight/></Link></div>
  <div className="refDest">{destinations.map(d=><DestinationCard d={d} key={d[0]}/>)}</div>
  <div className="howRow"><div><h2>Nasıl Çalışır?</h2><p>Sadece 3 adımda çevrimiçi olun.</p></div><div className="howSteps"><article><i>1</i><Search/><b>Destinasyonunuzu seçin</b><small>200+ ülke ve bölge arasından seyahat planınıza uygun paketi bulun.</small></article><article><i>2</i><CreditCard/><b>Paketinizi satın alın</b><small>Güvenli ödeme yöntemleriyle kolayca satın alın.</small></article><article><i>3</i><Smartphone/><b>eSIM'i kurun ve bağlanın</b><small>QR kodu veya manuel kurulumla dakikalar içinde çevrimiçi olun.</small></article></div></div>
 </div>
 <div className="refRight">
  <div className="packageTiles"><article><img alt="" src="https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?auto=format&fit=crop&w=900&q=85"/><div><h2>Bölgesel eSIM Paketleri</h2><p>Birden fazla ülkeye seyahat edenler için avantajlı paketler.</p><Link href="/regional-esim">Paketleri Keşfet <ArrowRight/></Link></div></article><article><img alt="" src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=800&q=85"/><div><h2>Global eSIM</h2><p>Dünya çapında kesintisiz internet.</p><Link href="/global-esim">Global Paketler <ArrowRight/></Link></div></article></div>
  <div className="travelPoster"><img alt="" src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=1000&q=88"/><strong>Her<br/>yolculukta<br/>yanınızda</strong><div><b>✈ Keşfet.</b><b>◎ Bağlan.</b><b>▣ Özgür Ol.</b></div></div>
  <div className="reviews"><div className="refHeading"><h2>Müşterilerimiz Ne Diyor?</h2></div><div className="reviewCards"><article><b>Elif K.</b><strong>★★★★★</strong><p>“Roma'da mükemmel çekti. Kurulumu çok kolaydı.”</p></article><article><b>Mert A.</b><strong>★★★★★</strong><p>“Tokyo'da hiç sorun yaşamadım. Hızlı ve güvenilir bağlantı.”</p></article><article><b>Deniz S.</b><strong>★★★★★</strong><p>“Hem uygun fiyatlı hem de çok pratik.”</p></article></div></div>
 </div>
</section></main></Shell>}