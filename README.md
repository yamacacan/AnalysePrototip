# Performans Analiz Sistemi - Sunum Prototipi

Bu proje, çalışan verimliliğini artırmak için geliştirilmiş bir Performans Analiz Sistemi'nin HTML/CSS/JavaScript ile hazırlanmış sunum prototipidir.

## 🎯 Proje Amacı

Sistem, iş kuralları listesinde belirtilen gereksinimlere uygun olarak:
- Client-Server mimarisi ile çalışan bir performans analiz sistemi
- Windows ajan yazılımı ile veri toplama
- Hiyerarşik kategori sistemi
- Detaylı raporlama ve analiz özellikleri
- Active Directory entegrasyonu

## 🚀 Özellikler

### 📊 Ana Özellikler
- **Gerçek Zamanlı İzleme**: Kullanıcı aktivitelerinin anlık takibi
- **Veri Kategorizasyonu**: Hiyerarşik kategori sistemi ile otomatik sınıflandırma
- **Detaylı Raporlama**: Günlük, haftalık ve aylık performans raporları
- **Güvenli Veri Saklama**: HTTPS şifreleme ve güvenli depolama
- **Mobil Uyumlu**: Responsive tasarım ile her cihazda erişim

### 🏗️ Sistem Mimarisi
- **Client (Ajan)**: Windows Service, veri toplama, yerel depolama
- **Server**: REST API, veri işleme, raporlama
- **Dashboard**: Analiz, raporlar, yönetim arayüzü

### 📈 Demo Özellikleri
- **Dashboard**: Gerçek zamanlı istatistikler ve grafikler
- **Raporlar**: PDF ve Excel formatında rapor oluşturma
- **Kategoriler**: Hiyerarşik kategori yönetimi
- **Kullanıcılar**: Kullanıcı yönetimi ve arama

## 🛠️ Teknolojiler

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **UI Framework**: Custom CSS with modern design principles
- **Icons**: Font Awesome 6.0
- **Charts**: CSS-based chart visualizations
- **Responsive**: Mobile-first responsive design

## 📁 Dosya Yapısı

```
performans-analiz-sistemi/
├── index.html          # Ana HTML dosyası
├── styles.css          # CSS stilleri
├── script.js           # JavaScript fonksiyonları
└── README.md           # Proje dokümantasyonu
```

## 🚀 Kurulum ve Çalıştırma

1. **Dosyaları İndirin**
   ```bash
   git clone [repository-url]
   cd performans-analiz-sistemi
   ```

2. **Web Sunucusu Başlatın**
   - Dosyaları bir web sunucusunda çalıştırın
   - Veya basit bir HTTP sunucusu kullanın:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js
   npx http-server
   
   # PHP
   php -S localhost:8000
   ```

3. **Tarayıcıda Açın**
   ```
   http://localhost:8000
   ```

## 🎨 Tasarım Özellikleri

### Renk Paleti
- **Ana Renk**: #667eea (Mavi-Mor gradient)
- **İkincil Renk**: #764ba2 (Mor)
- **Başarı**: #4CAF50 (Yeşil)
- **Uyarı**: #FF9800 (Turuncu)
- **Hata**: #F44336 (Kırmızı)

### Tipografi
- **Font Ailesi**: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- **Başlık Boyutları**: 2.5rem - 3.5rem
- **Gövde Metni**: 1rem - 1.3rem

### Animasyonlar
- **Fade-in**: Sayfa yüklendiğinde elementlerin yumuşak geçişi
- **Hover Effects**: Etkileşimli elementlerde hover animasyonları
- **Smooth Scrolling**: Sayfa içi geçişlerde yumuşak kaydırma

## 📱 Responsive Tasarım

### Breakpoint'ler
- **Desktop**: 1200px ve üzeri
- **Tablet**: 768px - 1199px
- **Mobile**: 480px - 767px
- **Small Mobile**: 480px altı

### Mobil Uyumluluk
- Esnek grid sistemi
- Mobilde tek sütun düzeni
- Dokunmatik dostu buton boyutları
- Optimize edilmiş navigasyon

## 🎯 Demo Özellikleri

### Dashboard
- Gerçek zamanlı istatistikler
- Günlük aktivite grafiği
- Uygulama kullanım oranları (pasta grafik)
- Otomatik veri güncelleme (5 saniyede bir)

### Raporlar
- Farklı rapor türleri (Günlük, Haftalık, Aylık)
- PDF ve Excel format desteği
- Rapor oluşturma simülasyonu
- İndirme ve görüntüleme işlemleri

### Kategoriler
- Hiyerarşik kategori ağacı
- Genişletme/daraltma animasyonları
- Düzenleme ve silme işlemleri
- Alt kategori yönetimi

### Kullanıcılar
- Kullanıcı listesi tablosu
- Gerçek zamanlı arama
- Durum göstergeleri (Aktif/Pasif)
- İşlem butonları

## 🔧 Özelleştirme

### CSS Değişkenleri
Ana renkleri değiştirmek için CSS dosyasındaki değişkenleri güncelleyin:

```css
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  --success-color: #4CAF50;
  --warning-color: #FF9800;
  --error-color: #F44336;
}
```

### JavaScript Konfigürasyonu
Demo verilerini değiştirmek için `script.js` dosyasındaki `generateMockData()` fonksiyonunu düzenleyin.

## 📊 Performans Optimizasyonları

- **Debounced Scroll Events**: Scroll performansını artırma
- **Intersection Observer**: Görünür element animasyonları
- **CSS Transitions**: Donanım hızlandırmalı animasyonlar
- **Optimized Images**: SVG ve CSS tabanlı grafikler

## 🔒 Güvenlik Özellikleri

- **HTTPS Ready**: Güvenli bağlantı desteği
- **XSS Protection**: Input sanitization
- **CSRF Protection**: Cross-site request forgery koruması
- **Content Security Policy**: Güvenlik politikaları

## 🌐 Tarayıcı Desteği

- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+
- **Internet Explorer**: Desteklenmez

## 📝 Lisans

Bu proje eğitim ve demo amaçlı hazırlanmıştır. Ticari kullanım için gerekli lisanslar alınmalıdır.

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/AmazingFeature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add some AmazingFeature'`)
4. Branch'inizi push edin (`git push origin feature/AmazingFeature`)
5. Pull Request oluşturun

## 📞 İletişim

Proje hakkında sorularınız için:
- **Email**: [your-email@example.com]
- **GitHub**: [your-github-profile]

## 🙏 Teşekkürler

- Font Awesome ikonları için
- Modern CSS teknikleri için
- Responsive design prensipleri için

---

**Not**: Bu prototip, gerçek bir performans analiz sistemi değil, sadece sunum amaçlı hazırlanmış bir demo uygulamasıdır. Gerçek sistem geliştirme için C# ve .NET Core teknolojileri kullanılması önerilir. 