"use client";
import {Search,Globe2,Wifi,ShieldCheck,Headphones,ArrowRight,UserRound,Menu,CheckCircle2,ChevronLeft} from "lucide-react";
import {useMemo,useState} from "react";

const countries=[
["🇹🇷","Türkiye","4,50 €'dan"],["🇮🇹","İtalya","4,50 €'dan"],["🇫🇷","Fransa","4,50 €'dan"],
["🇪🇸","İspanya","4,50 €'dan"],["🇺🇸","ABD","5,00 €'dan"],["🇬🇧","İngiltere","4,00 €'dan"]
];
const plans=[["1 GB","7 Gün","4,50 €"],["3 GB","15 Gün","8,50 €"],["5 GB","30 Gün","12,50 €"],["10 GB","30 Gün","18,00 €"],["20 GB","30 Gün","28,00 €"],["50 GB","90 Gün","45,00 €"]];

export default function Home(){
 const [q,setQ]=useState(""); const [screen,setScreen]=useState<"home"|"country"|"detail"|"checkout"|"success"|"account">("home");
 const [plan,setPlan]=useState(plans[3]);
 const shown=useMemo(()=>countries.filter(c=>c[1].toLowerCase().includes(q.toLowerCase())),[q]);
 const go=(s:any)=>{setScreen(s);window.scrollTo({top:0,behavior:"smooth"})};
 return <main>
 <header><button className="brand plain" onClick={()=>go("home")}><span className="mark">N</span><b>NordicConnect</b></button>
 <nav><button onClick={()=>go("country")}>eSIM'ler</button><a href="#how">Nasıl Çalışır?</a><a href="#support">Destek</a></nav>
 <div className="actions"><button className="ghost"><Globe2/> TR · EUR</button><button className="login" onClick={()=>go("account")}><UserRound/> Hesabım</button><button className="mobile"><Menu/></button></div></header>

 {screen==="home" && <>
 <section className="hero"><div className="heroInner"><span className="eyebrow">GLOBAL eSIM · ANINDA TESLİMAT</span><h1>Dünyanın her yerinde<br/><em>bağlantıda kalın.</em></h1><p>Seyahatlerinizde hızlı, güvenilir ve uygun fiyatlı eSIM çözümleri. Fiziksel SIM yok, roaming sürprizi yok.</p>
 <div className="search"><Search/><input value={q} onChange={e=>setQ(e.target.value)} placeholder="Nereye seyahat ediyorsunuz?"/><button onClick={()=>go("country")}>Ara</button></div>
 <div className="trust"><span>✓ Anında aktivasyon</span><span>✓ Fiziksel SIM gerekmez</span><span>✓ 7/24 destek</span></div></div>
 <div className="visual"><div className="sun"/><div className="cardFloat"><Wifi/><b>Bağlantın hazır</b><small>Türkiye · 10 GB / 30 Gün</small><div className="meter"><i/></div><small>7.2 GB kaldı</small></div></div></section>
 <section className="section"><div className="heading"><div><span className="eyebrow dark">POPÜLER ÜLKELER</span><h2>Nereye gidiyorsunuz?</h2></div><button className="linkBtn" onClick={()=>go("country")}>Tüm ülkeler <ArrowRight/></button></div>
 <div className="countryGrid">{shown.map(c=><button className="country" key={c[1]} onClick={()=>go("country")}><span>{c[0]}</span><div><b>{c[1]}</b><small>{c[2]}</small></div><ArrowRight/></button>)}</div></section>
 <section className="why section"><h2>Neden NordicConnect?</h2><div className="features"><Feature icon={<Wifi/>} t="Anında Kurulum" p="Dakikalar içinde eSIM'iniz hazır."/><Feature icon={<ShieldCheck/>} t="Güvenli Ödeme" p="Şeffaf fiyatlar ve güvenli ödeme."/><Feature icon={<Globe2/>} t="Dünya Çapında" p="190+ ülke ve bölgede bağlantı."/><Feature icon={<Headphones/>} t="7/24 Destek" p="Her zaman yanınızdayız."/></div></section>
 <section id="how" className="how"><div className="section"><div className="center"><span className="eyebrow">3 KOLAY ADIM</span><h2>Nasıl çalışır?</h2></div><div className="steps"><Step n="1" t="Destinasyonunu seç" p="Gideceğin ülkeyi ve internet paketini seç."/><Step n="2" t="Güvenle satın al" p="Ödemeni tamamla, eSIM'in hemen hazır olsun."/><Step n="3" t="QR kodu tara" p="Telefonuna kur ve vardığında internete bağlan."/></div></div></section></>}

 {screen==="country" && <div className="page section"><Back go={()=>go("home")}/><span className="eyebrow dark">TÜRKİYE</span><h1 className="pageTitle">Türkiye eSIM Paketleri</h1><p className="sub">İhtiyacınıza uygun paketi seçin. Aktivasyon anında, kurulum birkaç dakika.</p><div className="planList">{plans.map((p,i)=><div className={"rowPlan "+(i===3?"popular":"")} key={p[0]}>{i===3&&<span className="badge">En Popüler</span>}<div><Wifi/><b>{p[0]}</b><small>{p[1]}</small></div><strong>{p[2]}</strong><button onClick={()=>{setPlan(p);go("detail")}}>Satın Al</button></div>)}</div></div>}

 {screen==="detail" && <div className="page section"><Back go={()=>go("country")}/><div className="detailGrid"><article className="detailCard"><div className="flag">🇹🇷</div><h2>Türkiye {plan[0]}</h2><p>Türk Telekom · 4G/5G</p><hr/><Info k="Veri" v={plan[0]}/><Info k="Geçerlilik Süresi" v={plan[1]}/><Info k="Kapsama Alanı" v="Türkiye genelinde"/><Info k="Aktivasyon" v="Anında"/><Info k="Hotspot" v="Desteklenir"/><strong className="bigPrice">{plan[2]}</strong><button className="primary" onClick={()=>go("checkout")}>Sepete Ekle</button></article><article className="detailCard"><h3>Paket Hakkında</h3><p>Türkiye seyahatiniz boyunca kesintisiz internet erişimi sağlayan eSIM paketimizle haritalar, sosyal medya ve mesajlaşma daima yanınızda.</p>{["Kapsama Alanı","Kurulum Talimatları","Önemli Bilgiler","Sık Sorulan Sorular"].map(x=><div className="accordion" key={x}>{x}<span>⌄</span></div>)}</article></div></div>}

 {screen==="checkout" && <div className="page narrow"><Back go={()=>go("detail")}/><div className="progress"><b>1</b><i/><b>2</b><i/><span>3</span></div><h2>Ödeme</h2><div className="checkoutCard"><h3>Sepetiniz</h3><div className="order"><span>🇹🇷</span><div><b>Türkiye {plan[0]}</b><small>{plan[1]} · Türk Telekom</small></div><strong>{plan[2]}</strong></div><h3>Kart Bilgileri</h3><label>Kart Üzerindeki İsim<input defaultValue="Duygu Durmuş"/></label><label>Kart Numarası<input placeholder="1234 5678 9012 3456"/></label><div className="two"><label>Son Kullanma<input placeholder="12 / 28"/></label><label>CVV<input placeholder="•••"/></label></div><div className="total"><span>Toplam</span><strong>{plan[2]}</strong></div><button className="primary" onClick={()=>go("success")}>Ödemeyi Tamamla</button></div></div>}

 {screen==="success" && <div className="page narrow success"><CheckCircle2/><h1>Siparişiniz Tamamlandı!</h1><p>eSIM'iniz hazır. Aşağıdaki butondan eSIM'inizi görüntüleyebilir ve kuruluma başlayabilirsiniz.</p><button className="primary" onClick={()=>go("account")}>eSIM'imi Görüntüle</button><div className="checkoutCard"><Info k="Sipariş No" v="#NC20240926-1234"/><Info k="Paket" v={"Türkiye "+plan[0]}/><Info k="Tutar" v={plan[2]}/></div></div>}

 {screen==="account" && <div className="account page"><aside><h3>Hesabım</h3>{["eSIM'lerim","Siparişlerim","Profil Bilgilerim","Ödeme Yöntemleri","Destek Talepleri"].map((x,i)=><button className={i===0?"active":""} key={x}>{x}</button>)}</aside><section><h1>eSIM'lerim</h1><div className="simCard"><div><span className="flag">🇹🇷</span><h2>Türkiye 10 GB</h2><p>Türk Telekom · 10 GB / 30 Gün</p></div><span className="status">● Aktif</span><div className="usage"><div className="ring">72%</div><div><small>Kalan Veri</small><b>7.2 GB</b><small>/ 10 GB</small></div></div><button className="primary">QR Kodu Görüntüle</button></div></section></div>}
 <footer id="support"><div className="brand"><span className="mark">N</span><b>NordicConnect</b></div><p>Dünyanın her yerinde kolay ve güvenilir bağlantı.</p><small>© 2026 NordicConnect</small></footer>
 </main>
}
function Feature({icon,t,p}:any){return <article>{icon}<b>{t}</b><p>{p}</p></article>}
function Step({n,t,p}:any){return <div><i>{n}</i><Wifi/><h3>{t}</h3><p>{p}</p></div>}
function Back({go}:any){return <button className="back" onClick={go}><ChevronLeft/> Geri</button>}
function Info({k,v}:any){return <div className="info"><span>{k}</span><b>{v}</b></div>}
