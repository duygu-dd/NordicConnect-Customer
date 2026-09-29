import Link from 'next/link'; import {ArrowRight,MapPin,Utensils,Landmark,TrainFront,CalendarDays} from 'lucide-react'; import {Shell} from '../../components/Site';
const cities=[
['İstanbul','Türkiye','photo-1524231757912-21f4fe3a7200','Ayasofya • Galata • Boğaz'],
['Roma','İtalya','photo-1552832230-c0197dd311b5','Kolezyum • Vatikan • Trevi'],
['Paris','Fransa','photo-1502602898657-3e91760cbb34','Eyfel • Louvre • Montmartre'],
['Tokyo','Japonya','photo-1540959733332-eab4deabeeaf','Shibuya • Asakusa • Skytree'],
['New York','ABD','photo-1485871981521-5b1fd3805eee','Central Park • MoMA • Brooklyn'],
['Dubai','BAE','photo-1512453979798-5ea266f8880c','Burj Khalifa • Marina • Çöl']
];
const im=(id:string)=>`https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=88`;
export default function TravelTips(){return <Shell><main className="tipsPage">
<section className="tipsHero"><div><span>✈ SEYAHAT TÜYOLARI</span><h1>Daha fazla keşfet,<br/><em>daha iyi seyahat et.</em></h1><p>Popüler destinasyonlarda gezilecek yerler, yerel lezzetler, müzeler ve ulaşım ipuçları.</p></div></section>
<section className="tipsWrap"><div className="tipsTitle"><h2>Popüler Ülkelerde Gezilecek Şehirler</h2><span>Şehir rehberleri →</span></div><div className="cityGrid">{cities.map(c=><article key={c[0]}><img src={im(c[2])} alt={c[0]}/><div><small>{c[1]}</small><h3>{c[0]}</h3><p>{c[3]}</p><ArrowRight/></div></article>)}</div>
<section className="featuredCity"><div className="romeVisual"><img src={im('photo-1552832230-c0197dd311b5')} alt="Roma"/><div><small>ÖNE ÇIKAN · İTALYA</small><h2>Roma</h2><p>Tarihi sokakları, eşsiz mimarisi ve İtalyan mutfağıyla her gezinin mutlaka görmesi gereken şehirlerden.</p></div></div><div className="romeGuide"><h2>Roma Rehberi</h2><div className="guideTabs"><span><MapPin/>Gezilecek Yerler</span><span><Utensils/>Yeme İçme</span><span><Landmark/>Müzeler</span></div><div className="spotGrid"><article><img src={im('photo-1552832230-c0197dd311b5')}/><b>Kolezyum</b></article><article><img src={im('photo-1531572753322-ad063cecc140')}/><b>Vatikan</b></article><article><img src={im('photo-1529260830199-42c24126f198')}/><b>Trevi Çeşmesi</b></article></div><div className="tipFacts"><span><CalendarDays/><b>En iyi zaman</b><small>Nisan–Haziran, Eylül–Ekim</small></span><span><Utensils/><b>Yerel lezzetler</b><small>Carbonara, Cacio e Pepe, Gelato</small></span><span><TrainFront/><b>Ulaşım</b><small>Metro, otobüs ve yürüyüş</small></span></div></div></section>
<div className="tipsTitle"><h2>Diğer Popüler Şehir Rehberleri</h2></div><div className="miniCities">{cities.slice(0,6).map(c=><article key={c[0]}><img src={im(c[2])}/><b>{c[0]}</b><small>{c[1]}</small></article>)}</div></section></main></Shell>}