import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', phone: '', message: '' });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Warehouse" size={32} className="text-primary" />
            <span className="text-2xl font-bold text-accent">ШиноХранение</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('services')} className="hover:text-primary transition-colors">Услуги</button>
            <button onClick={() => scrollToSection('pricing')} className="hover:text-primary transition-colors">Цены</button>
            <button onClick={() => scrollToSection('benefits')} className="hover:text-primary transition-colors">Преимущества</button>
            <button onClick={() => scrollToSection('faq')} className="hover:text-primary transition-colors">FAQ</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors">Контакты</button>
          </nav>
          <a href="tel:+79991234567" className="flex items-center gap-2 text-lg font-semibold text-primary hover:text-primary/80 transition-colors">
            <Icon name="Phone" size={20} />
            <span className="hidden md:inline">+7 (999) 123-45-67</span>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Надёжное хранение шин в <span className="text-primary">Москве</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Профессиональное сезонное хранение автомобильных шин с гарантией сохранности. Удобно, безопасно, выгодно.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={() => scrollToSection('contact')} className="text-lg px-8">
                  Оставить заявку
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('pricing')} className="text-lg px-8">
                  Узнать цены
                </Button>
              </div>
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <Icon name="CheckCircle" className="text-primary" size={24} />
                  <span className="font-semibold">Бесплатная доставка</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Shield" className="text-secondary" size={24} />
                  <span className="font-semibold">Страхование</span>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/76dba4ab-6053-4106-b8c8-ea5d1437f1ee/files/f9bf1104-c2c3-4b65-aa8d-3ca545f9416c.jpg" 
                alt="Хранение шин"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground">Полный комплекс услуг для вашего удобства</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: 'Warehouse', title: 'Сезонное хранение', description: 'Храним ваши шины в оптимальных условиях: температура, влажность, защита от солнца' },
              { icon: 'Truck', title: 'Доставка и приём', description: 'Бесплатный забор и доставка шин по Москве в удобное для вас время' },
              { icon: 'Wrench', title: 'Шиномонтаж', description: 'Профессиональная смена и балансировка колёс перед сезоном' },
              { icon: 'ClipboardCheck', title: 'Мойка и маркировка', description: 'Очистка шин перед хранением и точная маркировка каждого колеса' },
              { icon: 'Bell', title: 'Напоминания', description: 'Уведомим о наступлении сезона замены шин заранее' },
              { icon: 'FileText', title: 'Страхование', description: 'Все шины застрахованы на время хранения у нас' },
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="text-primary" size={28} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Прозрачные цены</h2>
            <p className="text-xl text-muted-foreground">Выберите подходящий тариф для вашего автомобиля</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { 
                name: 'Стандарт', 
                size: 'R13 - R15',
                price: '3 500', 
                features: ['Хранение 6 месяцев', 'Маркировка шин', 'Страхование', 'Уведомления о сезоне'] 
              },
              { 
                name: 'Комфорт', 
                size: 'R16 - R18',
                price: '4 500', 
                features: ['Хранение 6 месяцев', 'Бесплатная доставка', 'Мойка перед хранением', 'Маркировка и страхование', 'SMS-уведомления'],
                popular: true
              },
              { 
                name: 'Премиум', 
                size: 'R19+',
                price: '6 000', 
                features: ['Хранение 6 месяцев', 'Доставка туда-обратно', 'Мойка и консервация', 'Приоритетное обслуживание', 'Страхование премиум'] 
              },
            ].map((plan, index) => (
              <Card key={index} className={`relative hover:shadow-xl transition-all duration-300 animate-fade-in ${plan.popular ? 'border-primary border-2 scale-105' : ''}`} style={{ animationDelay: `${index * 0.1}s` }}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Популярный
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <p className="text-muted-foreground mb-4">{plan.size}</p>
                  <div className="text-5xl font-bold text-primary">
                    {plan.price}
                    <span className="text-xl text-muted-foreground ml-1">₽</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">за сезон</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={20} />
                      <span>{feature}</span>
                    </div>
                  ))}
                  <Button className="w-full mt-6" variant={plan.popular ? 'default' : 'outline'} onClick={() => scrollToSection('contact')}>
                    Выбрать тариф
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Почему выбирают нас</h2>
            <p className="text-xl text-muted-foreground">Более 5 лет на рынке услуг хранения шин</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'ThermometerSnowflake', number: '15-25°C', title: 'Оптимальная температура', description: 'Поддерживаем идеальные условия хранения' },
              { icon: 'Lock', number: '24/7', title: 'Охраняемая территория', description: 'Видеонаблюдение и круглосуточная охрана' },
              { icon: 'Users', number: '3000+', title: 'Довольных клиентов', description: 'Нам доверяют автовладельцы Москвы' },
              { icon: 'Calendar', number: '100%', title: 'Гарантия сохранности', description: 'Все шины застрахованы и промаркированы' },
            ].map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon name={benefit.icon} className="text-secondary" size={32} />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{benefit.number}</div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Частые вопросы</h2>
            <p className="text-xl text-muted-foreground">Ответы на популярные вопросы о хранении шин</p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {[
              { 
                q: 'Как происходит приём шин на хранение?', 
                a: 'Вы можете привезти шины самостоятельно или заказать бесплатную доставку. При приёмке мы моем, маркируем каждое колесо и выдаём акт приёма-передачи с фотофиксацией.' 
              },
              { 
                q: 'Какие условия хранения вы обеспечиваете?', 
                a: 'Шины хранятся в крытом отапливаемом складе при температуре 15-25°C и влажности 50-60%. Исключено попадание прямых солнечных лучей, которые разрушают резину.' 
              },
              { 
                q: 'Что входит в стоимость хранения?', 
                a: 'В стоимость входит: хранение до 6 месяцев, маркировка, страхование, SMS-уведомления о наступлении сезона. Доставка и мойка включены в тарифы Комфорт и Премиум.' 
              },
              { 
                q: 'Как забрать шины после хранения?', 
                a: 'За неделю до нужной даты мы пришлём напоминание. Вы можете забрать шины сами или заказать доставку. Мы работаем без выходных с 8:00 до 22:00.' 
              },
              { 
                q: 'Можно ли хранить шины на дисках?', 
                a: 'Да, мы храним как шины без дисков, так и полностью собранные колёса. Для колёс в сборе используется специальное горизонтальное хранение.' 
              },
              { 
                q: 'Предоставляете ли вы услуги шиномонтажа?', 
                a: 'Да, у нас есть профессиональный шиномонтаж. Вы можете снять/установить шины прямо у нас перед сдачей или после получения из хранения.' 
              },
            ].map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-semibold text-lg">{item.q}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl font-bold mb-4">Оставьте заявку</h2>
              <p className="text-xl text-muted-foreground">Мы перезвоним в течение 15 минут и ответим на все вопросы</p>
            </div>
            <Card className="shadow-xl animate-scale-in">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-2">Ваше имя</label>
                    <Input 
                      id="name"
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold mb-2">Телефон</label>
                    <Input 
                      id="phone"
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold mb-2">Комментарий (необязательно)</label>
                    <Textarea 
                      id="message"
                      placeholder="Укажите размер шин, желаемую дату приёма..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={4}
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full text-lg h-14">
                    Отправить заявку
                  </Button>
                  <p className="text-sm text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
                  </p>
                </form>
              </CardContent>
            </Card>
            <div className="mt-12 text-center space-y-6">
              <div className="flex items-center justify-center gap-3">
                <Icon name="Phone" className="text-primary" size={24} />
                <a href="tel:+79991234567" className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors">
                  +7 (999) 123-45-67
                </a>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Icon name="MapPin" className="text-secondary" size={24} />
                <span className="text-lg">Москва, ул. Складская, 15</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Icon name="Clock" className="text-secondary" size={24} />
                <span className="text-lg">Ежедневно с 8:00 до 22:00</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-accent text-accent-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Warehouse" size={28} />
                <span className="text-xl font-bold">ШиноХранение</span>
              </div>
              <p className="text-accent-foreground/80">
                Профессиональное хранение шин в Москве с 2019 года
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Навигация</h3>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('services')} className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">Услуги</button></li>
                <li><button onClick={() => scrollToSection('pricing')} className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">Цены</button></li>
                <li><button onClick={() => scrollToSection('faq')} className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">FAQ</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="text-accent-foreground/80 hover:text-accent-foreground transition-colors">Контакты</button></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Контакты</h3>
              <div className="space-y-2 text-accent-foreground/80">
                <p>+7 (999) 123-45-67</p>
                <p>Москва, ул. Складская, 15</p>
                <p>info@shinohranenie.ru</p>
              </div>
            </div>
          </div>
          <div className="border-t border-accent-foreground/20 mt-8 pt-8 text-center text-accent-foreground/60">
            <p>&copy; 2024 ШиноХранение. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
