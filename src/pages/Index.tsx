import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

const Index = () => {
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
            <span className="text-2xl font-bold text-accent">OtelShin</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('services')} className="hover:text-primary transition-colors">Услуги</button>
            <button onClick={() => scrollToSection('pricing')} className="hover:text-primary transition-colors">Цены</button>
            <button onClick={() => scrollToSection('benefits')} className="hover:text-primary transition-colors">Преимущества</button>
            <button onClick={() => scrollToSection('faq')} className="hover:text-primary transition-colors">FAQ</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors">Контакты</button>
          </nav>
          <a href="tel:+79780703665" className="flex items-center gap-2 text-lg font-semibold text-primary hover:text-primary/80 transition-colors">
            <Icon name="Phone" size={20} />
            <span className="hidden md:inline">+7 (978) 070-36-65</span>
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
                ХРАНЕНИЕ <span className="text-primary">ШИН</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Вывоз шин от дома или офиса на наш счёт
              </p>
              <p className="text-lg">
                Решим проблему с хранением ваших колес<br />
                Очень быстро и профессионально<br />
                Бесплатная доставка
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild className="text-lg px-8">
                  <a href="tel:+79780703665">
                    <Icon name="Phone" size={20} className="mr-2" />
                    Быстрый звонок
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild className="text-lg px-8">
                  <a href="https://t.me/EnrikeTomas" target="_blank" rel="noopener noreferrer">
                    <Icon name="Send" size={20} className="mr-2" />
                    Написать в Telegram
                  </a>
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">100+</div>
                  <div className="text-sm text-muted-foreground">Клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">Доступ круглосуточно</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">5+</div>
                  <div className="text-sm text-muted-foreground">Лет опыта</div>
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
            <h2 className="text-4xl font-bold mb-4">Кому будут полезны наши услуги</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: 'Car', title: 'Автовладельцам', description: 'Освободите место в гараже или балконе' },
              { icon: 'Building2', title: 'Автосервисам', description: 'Храним шины ваших клиентов профессионально' },
              { icon: 'ShieldCheck', title: 'Компенсация за задержку', description: 'Гарантируем возврат по договору' },
              { icon: 'ThermometerSnowflake', title: 'Климат-контроль', description: 'Оптимальная температура круглый год' },
              { icon: 'CheckCircle', title: 'Гарантия', description: '100% гарантия сохранности' },
              { icon: 'Headphones', title: 'Поддержка', description: 'Всегда на связи 24/7' },
              { icon: 'Zap', title: 'Быстрое обслуживание', description: 'Примем и вернём шины в удобное время' },
              { icon: 'Award', title: 'Надёжность', description: 'Многолетний опыт работы' },
              { icon: 'Star', title: 'Лучшие условия', description: 'Оптимальное соотношение цены и качества' },
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

      {/* Benefits Section */}
      <section id="benefits" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Почему выбирают нас?</h2>
            <p className="text-xl text-muted-foreground">Современное хранилище с оптимальными условиями и индивидуальным подходом</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'Thermometer', title: 'Климат-контроль', description: 'Оптимальная температура и влажность' },
              { icon: 'Lock', title: 'Безопасность', description: 'Видеонаблюдение и охрана 24/7' },
              { icon: 'Truck', title: 'Бесплатная доставка', description: 'Заберём и привезём бесплатно' },
              { icon: 'FileText', title: 'Договор хранения', description: 'Официальное оформление и гарантии' },
            ].map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon name={benefit.icon} className="text-primary" size={32} />
                  </div>
                  <CardTitle>{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Как мы работаем</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Заявка', description: 'Оставьте заявку по телефону или онлайн' },
              { step: '02', title: 'Забор шин', description: 'Заберём шины от дома или офиса бесплатно' },
              { step: '03', title: 'Хранение', description: 'Обеспечим идеальные условия хранения' },
              { step: '04', title: 'Возврат', description: 'Доставим шины обратно в удобное время' },
            ].map((item, index) => (
              <div key={index} className="relative animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="text-5xl font-bold text-primary/20 mb-2">{item.step}</div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{item.description}</CardDescription>
                  </CardContent>
                </Card>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <Icon name="ChevronRight" className="text-primary/30" size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Тарифы хранения</h2>
            <p className="text-xl text-muted-foreground">Выберите подходящий тариф для вашего радиуса колёс</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { radius: 'R13 - R15', price: '500', features: ['Климат-контроль', 'Бесплатный вывоз', 'Договор хранения', 'Индивидуальная маркировка'] },
              { radius: 'R16 - R19', price: '600', features: ['Климат-контроль', 'Бесплатный вывоз', 'Договор хранения', 'Индивидуальная маркировка', 'Приоритетная доставка'], popular: true },
              { radius: 'R20+', price: '700', features: ['Климат-контроль', 'Бесплатный вывоз', 'Договор хранения', 'Индивидуальная маркировка', 'Приоритетная доставка', 'VIP-зона хранения'] },
            ].map((plan, index) => (
              <Card key={index} className={`relative hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in ${plan.popular ? 'border-primary border-2 shadow-lg' : ''}`} style={{ animationDelay: `${index * 0.1}s` }}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">Популярный</span>
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl mb-2">{plan.radius}</CardTitle>
                  <div className="mt-4">
                    <span className="text-5xl font-bold text-primary">{plan.price}₽</span>
                    <span className="text-muted-foreground"> / месяц</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Icon name="CheckCircle" className="text-primary flex-shrink-0" size={20} />
                      <span>{feature}</span>
                    </div>
                  ))}
                  <Button className="w-full mt-6" size="lg" variant={plan.popular ? 'default' : 'outline'} asChild>
                    <a href="tel:+79780703665">Выбрать тариф</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Часто задаваемые вопросы</h2>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {[
              { 
                question: 'Как происходит хранение шин?', 
                answer: 'Шины хранятся в специальном помещении с контролем температуры и влажности. Каждый комплект маркируется и размещается на стеллажах согласно требованиям хранения.' 
              },
              { 
                question: 'Какие условия хранения?', 
                answer: 'Температура +10...+25°C, влажность 50-70%, защита от прямых солнечных лучей. Шины хранятся в вертикальном положении с периодическим поворотом.' 
              },
              { 
                question: 'Как оформить договор?', 
                answer: 'Договор оформляется при передаче шин. Необходим паспорт. Мы предоставляем два экземпляра договора и акт приёма-передачи.' 
              },
              { 
                question: 'Бесплатная ли доставка?', 
                answer: 'Да, доставка шин в обе стороны абсолютно бесплатна в пределах города Солнечногорск.' 
              },
              { 
                question: 'Можно ли забрать шины раньше срока?', 
                answer: 'Да, вы можете забрать шины в любое удобное время. Оплата производится только за фактический срок хранения.' 
              },
              { 
                question: 'Что входит в стоимость хранения?', 
                answer: 'В стоимость входит: хранение в оптимальных условиях, маркировка, вывоз и доставка шин, страхование, круглосуточная охрана и видеонаблюдение.' 
              },
            ].map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg px-6 border animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                <AccordionTrigger className="text-left hover:text-primary transition-colors">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl font-bold mb-4">Контакты</h2>
              <p className="text-xl text-muted-foreground">Свяжитесь с нами удобным способом</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover:shadow-lg transition-all duration-300 animate-fade-in">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name="MapPin" className="text-primary" size={24} />
                  </div>
                  <CardTitle>Адрес</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">г. Солнечногорск, ул. Баранова 28</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name="Phone" className="text-primary" size={24} />
                  </div>
                  <CardTitle>Телефон</CardTitle>
                </CardHeader>
                <CardContent>
                  <a href="tel:+79780703665" className="text-primary hover:underline text-lg">
                    +7 (978) 070-36-65
                  </a>
                </CardContent>
              </Card>
            </div>
            <div className="mt-8 text-center space-y-4">
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" asChild className="text-lg px-8">
                  <a href="tel:+79780703665">
                    <Icon name="Phone" size={20} className="mr-2" />
                    Быстрый звонок
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild className="text-lg px-8">
                  <a href="https://t.me/EnrikeTomas" target="_blank" rel="noopener noreferrer">
                    <Icon name="Send" size={20} className="mr-2" />
                    Написать в Telegram
                  </a>
                </Button>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="link" className="text-primary">
                    Ознакомиться с договором хранения
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Договор хранения</DialogTitle>
                    <DialogDescription>
                      Пример договора хранения автомобильных шин
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 text-sm">
                    <p className="font-semibold">ДОГОВОР ХРАНЕНИЯ № ___</p>
                    <p>г. Солнечногорск, &quot;___&quot; __________ 20__ г.</p>
                    <p>ИП ____________, именуемый в дальнейшем &quot;Хранитель&quot;, с одной стороны, и гражданин ____________, именуемый в дальнейшем &quot;Поклажедатель&quot;, с другой стороны, заключили настоящий Договор о нижеследующем:</p>
                    
                    <div>
                      <p className="font-semibold">1. ПРЕДМЕТ ДОГОВОРА</p>
                      <p>1.1. Поклажедатель передаёт, а Хранитель принимает на хранение автомобильные шины в количестве ____ шт.</p>
                      <p>1.2. Срок хранения: с &quot;___&quot; __________ 20__ г. по &quot;___&quot; __________ 20__ г.</p>
                    </div>

                    <div>
                      <p className="font-semibold">2. ОБЯЗАННОСТИ СТОРОН</p>
                      <p>2.1. Хранитель обязуется:</p>
                      <p>- Обеспечить сохранность принятых на хранение шин</p>
                      <p>- Соблюдать условия хранения (температура, влажность)</p>
                      <p>- Осуществлять маркировку и учёт имущества</p>
                      <p>- Обеспечить охрану и видеонаблюдение</p>
                      <p>2.2. Поклажедатель обязуется:</p>
                      <p>- Своевременно оплачивать услуги хранения</p>
                      <p>- Предоставить достоверную информацию о передаваемом имуществе</p>
                    </div>

                    <div>
                      <p className="font-semibold">3. СТОИМОСТЬ И ПОРЯДОК ОПЛАТЫ</p>
                      <p>3.1. Стоимость хранения составляет ______ рублей в месяц</p>
                      <p>3.2. Оплата производится ежемесячно до 5 числа текущего месяца</p>
                    </div>

                    <div>
                      <p className="font-semibold">4. ОТВЕТСТВЕННОСТЬ СТОРОН</p>
                      <p>4.1. За утрату или повреждение имущества Хранитель несёт ответственность в размере действительной стоимости</p>
                      <p>4.2. Хранитель освобождается от ответственности в случае форс-мажорных обстоятельств</p>
                    </div>

                    <div>
                      <p className="font-semibold">5. ПРОЧИЕ УСЛОВИЯ</p>
                      <p>5.1. Договор вступает в силу с момента подписания и действует до выполнения обязательств</p>
                      <p>5.2. Все споры решаются путём переговоров, а при недостижении согласия - в судебном порядке</p>
                    </div>

                    <p className="font-semibold mt-6">РЕКВИЗИТЫ И ПОДПИСИ СТОРОН</p>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Warehouse" size={32} className="text-primary" />
                <span className="text-2xl font-bold text-accent">OtelShin</span>
              </div>
              <p className="text-muted-foreground">
                Профессиональное хранение автомобильных шин в Солнечногорске
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>г. Солнечногорск</p>
                <p>ул. Баранова 28</p>
                <a href="tel:+79780703665" className="text-primary hover:underline block">
                  +7 (978) 070-36-65
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Режим работы</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>Понедельник - Пятница: 9:00 - 19:00</p>
                <p>Суббота: 10:00 - 16:00</p>
                <p>Воскресенье: выходной</p>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
            <p>&copy; 2024 OtelShin. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
