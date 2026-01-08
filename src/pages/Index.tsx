import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://functions.poehali.dev/a4545f55-dff0-48fc-9eff-a09e6af822fe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          message: formData.message
        }),
      });

      if (response.ok) {
        toast({
          title: "Заявка отправлена!",
          description: "Мы свяжемся с вами в ближайшее время.",
        });
        setFormData({ name: '', phone: '', message: '' });
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      toast({
        title: "Ошибка отправки",
        description: "Попробуйте позвонить нам напрямую",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
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
            <span className="text-2xl font-bold text-accent">OtelShin</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('services')} className="hover:text-primary transition-colors">Услуги</button>
            <button onClick={() => scrollToSection('pricing')} className="hover:text-primary transition-colors">Цены</button>
            <button onClick={() => scrollToSection('benefits')} className="hover:text-primary transition-colors">Преимущества</button>
            <button onClick={() => scrollToSection('faq')} className="hover:text-primary transition-colors">FAQ</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors">Контакты</button>
          </nav>
          <a href="tel:+79262203649" className="flex items-center gap-2 text-lg font-semibold text-primary hover:text-primary/80 transition-colors">
            <Icon name="Phone" size={20} />
            <span className="hidden md:inline">+7 (926) 220-36-49</span>
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
                <Button size="lg" onClick={() => scrollToSection('contact')} className="text-lg px-8">
                  Выбрать тариф
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('pricing')} className="text-lg px-8">
                  Узнать больше
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
              { icon: 'MapPin', title: 'Близость', description: '100% гарантия сохранности' },
              { icon: 'Clock', title: '24/7 доступ', description: 'Принимаем заявки круглосуточно' },
              { icon: 'BadgeCheck', title: 'Надёжность', description: 'Многолетний опыт и сотни довольных клиентов' },
              { icon: 'Gift', title: 'Поддержка', description: 'Индивидуальный подход к каждому' },
              { icon: 'DollarSign', title: 'Выгодно', description: 'Помощь в любой момент 24/7 без доп. плат' },
              { icon: 'Gauge', title: 'Быстрое обслуживание', description: 'Примем и вернём шины за 15 минут' },
              { icon: 'TrendingUp', title: 'Лучшие условия', description: 'Конкурентные цены и высокий сервис' },
            ].map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon name={benefit.icon} className="text-secondary" size={32} />
                  </div>
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

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Тарифы хранения</h2>
            <p className="text-xl text-muted-foreground">Выберите подходящий тариф в зависимости от размера шин</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { 
                name: 'R13-R15', 
                priceMonth: '500',
                priceSeason: '3 000', 
                features: ['Хранение сезона', 'Личный кабинет', 'Вывоз 4х шин от дома или офиса', 'Доставка 4х шин до места замены', 'Мойка 4х шин (по необходимости + 1200 рублей)', 'Замена 4х колес на балансировку (500 рублей + монтаж)'] 
              },
              { 
                name: 'R16-R19', 
                priceMonth: '600',
                priceSeason: '3 600', 
                features: ['Хранение сезона', 'Личный кабинет', 'Вывоз 4х шин от дома или офиса', 'Доставка 4х шин до места замены', 'Мойка 4х шин (по необходимости + 1200 рублей)', 'Замена 4х колес на балансировку (500 рублей + монтаж)'],
                popular: true
              },
              { 
                name: 'R20+', 
                priceMonth: '700',
                priceSeason: '4 200', 
                features: ['Хранение сезона', 'Личный кабинет', 'Вывоз 4х шин от дома или офиса', 'Доставка 4х шин до места замены', 'Мойка 4х шин (по необходимости + 1200 рублей)', 'Замена 4х колес на балансировку (500 рублей + монтаж)'] 
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
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-primary">
                      {plan.priceMonth}
                      <span className="text-lg text-muted-foreground ml-1">₽/мес</span>
                    </div>
                    <div className="text-4xl font-bold text-primary">
                      {plan.priceSeason}
                      <span className="text-lg text-muted-foreground ml-1">₽/сезон</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={20} />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                  <Button className="w-full mt-6" variant={plan.popular ? 'default' : 'outline'} onClick={() => scrollToSection('contact')}>
                    Выбрать тариф
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-center">Дополнительные услуги</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Droplets" className="text-primary" size={24} />
                    Мойка колес/шин
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-2">Бережная мойка перед хранением:</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Доставка колес/шин на мойку</li>
                    <li>• Возврат на склад</li>
                    <li>• Мойка до 6 колес/шин</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="FileText" className="text-primary" size={24} />
                    Договор + Документация
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="w-full">Договор</Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle>Договор хранения</DialogTitle>
                          <DialogDescription>
                            Договор на оказание услуг хранения шин
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4 text-sm">
                          <p className="font-semibold">ДОГОВОР № ______</p>
                          <p>на оказание услуг сезонного хранения автомобильных шин</p>
                          
                          <div>
                            <p className="font-semibold">1. ПРЕДМЕТ ДОГОВОРА</p>
                            <p>1.1. Исполнитель обязуется оказать Заказчику услуги по хранению автомобильных шин (далее – «Товар»), а Заказчик обязуется принять и оплатить оказанные услуги.</p>
                            <p>1.2. Хранение осуществляется в специально оборудованном помещении с соблюдением температурного режима и влажности.</p>
                          </div>

                          <div>
                            <p className="font-semibold">2. ПРАВА И ОБЯЗАННОСТИ СТОРОН</p>
                            <p>2.1. Исполнитель обязуется:</p>
                            <ul className="list-disc ml-6">
                              <li>Принять шины на хранение с составлением акта приема-передачи</li>
                              <li>Обеспечить сохранность шин в течение срока хранения</li>
                              <li>Вернуть шины по первому требованию Заказчика</li>
                            </ul>
                            <p>2.2. Заказчик обязуется:</p>
                            <ul className="list-disc ml-6">
                              <li>Своевременно оплатить услуги хранения</li>
                              <li>Предоставить достоверную информацию о шинах</li>
                              <li>Забрать шины в согласованные сроки</li>
                            </ul>
                          </div>

                          <div>
                            <p className="font-semibold">3. СТОИМОСТЬ И ПОРЯДОК РАСЧЕТОВ</p>
                            <p>3.1. Стоимость услуг определяется согласно действующему прейскуранту.</p>
                            <p>3.2. Оплата производится в момент сдачи шин на хранение.</p>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                    <Button variant="outline" className="w-full">Доставка</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Что ещё стоит знать?</h2>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {[
              { 
                q: 'Личный кабинет', 
                a: 'Управление и контроль хранением шин в одном окне' 
              },
              { 
                q: 'Гибкий возврат', 
                a: 'Забираете шины в любой удобный момент' 
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-transparent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Готовы сдать шины на хранение?</h2>
          <p className="text-xl text-muted-foreground mb-8">Свяжитесь с нами удобным способом. Ответим на все вопросы, подберем тариф и согласуем удобное время</p>
          <div className="space-y-6 max-w-md mx-auto">
            <div className="flex flex-col gap-3">
              <p className="font-semibold text-lg">Как мы работаем:</p>
              <div className="flex items-start gap-3 text-left">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-bold">1</div>
                <div>
                  <p className="font-semibold">Звонок</p>
                  <p className="text-sm text-muted-foreground">Позвоните, напишите, оформите онлайн</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-left">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-bold">2</div>
                <div>
                  <p className="font-semibold">Приезжаем</p>
                  <p className="text-sm text-muted-foreground">Забираем у вас в удобное время</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-left">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-bold">3</div>
                <div>
                  <p className="font-semibold">Привозим</p>
                  <p className="text-sm text-muted-foreground">Доставим обратно перед сменой сезона</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-left">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 font-bold">4</div>
                <div>
                  <p className="font-semibold">Выдача</p>
                  <p className="text-sm text-muted-foreground">Готово!</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 pt-6">
              <Button size="lg" onClick={() => scrollToSection('contact')} className="w-full">
                <Icon name="Send" className="mr-2" size={20} />
                Быстрый звонок
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('contact')} className="w-full">
                <Icon name="MessageCircle" className="mr-2" size={20} />
                Написать в Telegram
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl font-bold mb-4">Свяжитесь с нами</h2>
              <p className="text-xl text-muted-foreground">Заполните форму и мы перезвоним в течение 15 минут</p>
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
                  <Button type="submit" size="lg" className="w-full text-lg h-14" disabled={isSubmitting}>
                    {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
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
                <a href="tel:+79262203649" className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors">
                  +7 (926) 220-36-49
                </a>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Icon name="MapPin" className="text-secondary" size={24} />
                <span className="text-lg">Солнечногорск, ул. Баранова 28</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Icon name="Clock" className="text-secondary" size={24} />
                <span className="text-lg">Ежедневно с 9:00 до 21:00</span>
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
                <span className="text-xl font-bold">OtelShin</span>
              </div>
              <p className="text-accent-foreground/80">
                Профессиональное хранение шин с 2019 года
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
                <p>+7 (926) 220-36-49</p>
                <p>Солнечногорск, ул. Баранова 28</p>
                <p>info@otelshin.ru</p>
              </div>
            </div>
          </div>
          <div className="border-t border-accent-foreground/20 mt-8 pt-8 text-center text-accent-foreground/60">
            <p>&copy; 2024 OtelShin. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;