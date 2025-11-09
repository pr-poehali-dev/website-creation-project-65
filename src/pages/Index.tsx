import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface Article {
  id: number;
  title: string;
  excerpt: string;
  tags: string[];
  image: string;
  date: string;
  author: string;
}

const articles: Article[] = [
  {
    id: 1,
    title: 'Дизайн будущего: тренды 2025',
    excerpt: 'Погружаемся в мир 3D интерфейсов, неоморфизма и неоновой эстетики',
    tags: ['дизайн', 'тренды', '3d'],
    image: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d',
    date: '15 окт 2024',
    author: 'Анна Петрова'
  },
  {
    id: 2,
    title: 'React 19: что нового?',
    excerpt: 'Обзор новых возможностей и улучшений производительности',
    tags: ['react', 'frontend', 'разработка'],
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee',
    date: '12 окт 2024',
    author: 'Иван Смирнов'
  },
  {
    id: 3,
    title: 'AI в веб-разработке',
    excerpt: 'Как искусственный интеллект меняет подход к созданию сайтов',
    tags: ['ai', 'разработка', 'будущее'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
    date: '08 окт 2024',
    author: 'Мария Козлова'
  },
  {
    id: 4,
    title: 'Анимации в CSS',
    excerpt: 'Создаём впечатляющие эффекты без JavaScript',
    tags: ['css', 'анимации', 'frontend'],
    image: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2',
    date: '05 окт 2024',
    author: 'Дмитрий Волков'
  },
  {
    id: 5,
    title: 'Оптимизация производительности',
    excerpt: 'Практические советы по ускорению веб-приложений',
    tags: ['производительность', 'оптимизация', 'разработка'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
    date: '01 окт 2024',
    author: 'Елена Новикова'
  },
  {
    id: 6,
    title: 'TypeScript best practices',
    excerpt: 'Лучшие практики для типизированного JavaScript',
    tags: ['typescript', 'разработка', 'практики'],
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea',
    date: '28 сен 2024',
    author: 'Павел Соколов'
  }
];

const allTags = Array.from(new Set(articles.flatMap(a => a.tags)));

const Index = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [email, setEmail] = useState('');

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const filteredArticles = articles.filter(article => {
    const matchesTags = selectedTags.length === 0 || 
      selectedTags.some(tag => article.tags.includes(tag));
    const matchesSearch = searchQuery === '' ||
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTags && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border/40 backdrop-blur-sm sticky top-0 z-50 bg-background/80">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-black text-primary text-glow">БЛОГ</h1>
            <div className="flex gap-3">
              <Button variant="ghost" className="btn-3d text-foreground hover:text-primary transition-colors font-bold">
                Главная
              </Button>
              <Button variant="ghost" className="btn-3d text-foreground hover:text-secondary transition-colors font-bold">
                Категории
              </Button>
              <Button variant="ghost" className="btn-3d text-foreground hover:text-accent transition-colors font-bold">
                Контакты
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-secondary/10 to-accent/10 opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              КРЕАТИВНЫЙ КОНТЕНТ
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Исследуем технологии, дизайн и будущее веб-разработки
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button 
                size="lg" 
                className="btn-3d bg-gradient-to-r from-primary to-primary/80 hover:from-primary hover:to-primary text-primary-foreground font-bold text-lg px-8"
              >
                <Icon name="Rocket" className="mr-2" size={20} />
                Читать статьи
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="btn-3d border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground font-bold text-lg px-8"
              >
                <Icon name="Mail" className="mr-2" size={20} />
                Подписаться
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
            <div className="relative w-full md:w-96">
              <Icon name="Search" className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                placeholder="Поиск статей..."
                className="pl-10 bg-background border-border h-12"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {allTags.map(tag => (
                <Badge
                  key={tag}
                  variant={selectedTags.includes(tag) ? "default" : "outline"}
                  className={`cursor-pointer transition-all text-sm py-1.5 px-4 ${
                    selectedTags.includes(tag)
                      ? 'bg-gradient-to-r from-primary to-primary/80 text-primary-foreground btn-3d'
                      : 'border-muted-foreground/30 hover:border-primary'
                  }`}
                  onClick={() => toggleTag(tag)}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map(article => (
              <Card 
                key={article.id} 
                className="bg-card border-border hover:card-glow transition-all duration-300 overflow-hidden group cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60"></div>
                </div>
                <CardHeader>
                  <div className="flex gap-2 mb-3 flex-wrap">
                    {article.tags.map(tag => (
                      <Badge 
                        key={tag} 
                        variant="secondary"
                        className="text-xs bg-secondary/20 text-secondary border border-secondary/30"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {article.excerpt}
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between items-center text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Icon name="User" size={16} />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Calendar" size={16} />
                    <span>{article.date}</span>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              ПОДПИШИСЬ НА РАССЫЛКУ
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Получай свежие статьи прямо на почту
            </p>
            <div className="flex gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="your@email.com"
                className="bg-background border-border h-14 text-lg"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button 
                size="lg"
                className="btn-3d bg-gradient-to-r from-secondary to-secondary/80 hover:from-secondary hover:to-secondary text-secondary-foreground font-bold px-8 h-14"
              >
                <Icon name="Send" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-border/40">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4 text-primary text-glow">БЛОГ</h4>
              <p className="text-muted-foreground">
                Современный блог о технологиях и дизайне
              </p>
            </div>
            <div>
              <h5 className="font-bold mb-4">Разделы</h5>
              <ul className="space-y-3 text-muted-foreground">
                <li className="hover:text-primary transition-all cursor-pointer inline-block px-3 py-1.5 rounded btn-3d hover:bg-primary/10">Главная</li>
                <li className="hover:text-secondary transition-all cursor-pointer inline-block px-3 py-1.5 rounded btn-3d hover:bg-secondary/10">Категории</li>
                <li className="hover:text-accent transition-all cursor-pointer inline-block px-3 py-1.5 rounded btn-3d hover:bg-accent/10">Контакты</li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-4">Контакты</h5>
              <div className="flex gap-4">
                <Button size="icon" variant="outline" className="btn-3d border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <Icon name="Mail" size={20} />
                </Button>
                <Button size="icon" variant="outline" className="btn-3d border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
                  <Icon name="Github" size={20} />
                </Button>
                <Button size="icon" variant="outline" className="btn-3d border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                  <Icon name="Twitter" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border/40 text-center text-muted-foreground">
            <p>© 2024 БЛОГ. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;