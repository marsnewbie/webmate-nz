import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Code, Palette, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const content = {
  en: {
    hero: {
      title: "Our Work",
      subtitle: "Discover stunning websites we've created for New Zealand businesses"
    },
    projects: [
      {
        title: "Auckland Café Co.",
        category: "Restaurant",
        image: "/Auckland Café.jpeg",
        tags: ["Web Design", "E-commerce", "SEO"],
        desc: "Modern café website with online ordering"
      },
      {
        title: "GreenTech NZ",
        category: "Technology",
        image: "/GreenTech NZ.jpeg",
        tags: ["Corporate", "Custom Design", "Mobile"],
        desc: "Corporate website for tech startup"
      },
      {
        title: "Kiwi Fitness Studio",
        category: "Health & Fitness",
        image: "/Kiwi Fitness.jpeg",
        tags: ["Booking System", "Responsive", "SEO"],
        desc: "Fitness studio with class bookings"
      },
      {
        title: "Wellington Law Firm",
        category: "Legal",
        image: "/Wellington Law.jpeg",
        tags: ["Professional", "Custom CMS", "Secure"],
        desc: "Professional law firm website"
      },
      {
        title: "Eco Home Products",
        category: "E-commerce",
        image: "/Eco Home Product.png",
        tags: ["Online Store", "Payment", "Inventory"],
        desc: "Full e-commerce solution"
      },
      {
        title: "NZ Beauty Salon",
        category: "Beauty",
        image: "/Beauty Salon.jpeg",
        tags: ["Booking", "Gallery", "Mobile"],
        desc: "Elegant beauty salon website"
      }
    ],
    cta: "View More Projects"
  },
  zh: {
    hero: {
      title: "我们的作品",
      subtitle: "探索我们为新西兰企业打造的精美网站"
    },
    projects: [
      {
        title: "奥克兰咖啡馆",
        category: "餐饮",
        image: "/Auckland Café.jpeg",
        tags: ["网站设计", "电商", "SEO"],
        desc: "现代咖啡馆网站，支持在线订购"
      },
      {
        title: "绿色科技新西兰",
        category: "科技",
        image: "/GreenTech NZ.jpeg",
        tags: ["企业", "定制设计", "移动端"],
        desc: "科技创业公司企业网站"
      },
      {
        title: "奇异鸟健身工作室",
        category: "健康健身",
        image: "/Kiwi Fitness.jpeg",
        tags: ["预订系统", "响应式", "SEO"],
        desc: "健身工作室课程预订"
      },
      {
        title: "惠灵顿律师事务所",
        category: "法律",
        image: "/Wellington Law.jpeg",
        tags: ["专业", "定制CMS", "安全"],
        desc: "专业律师事务所网站"
      },
      {
        title: "环保家居产品",
        category: "电商",
        image: "/Eco Home Product.png",
        tags: ["在线商店", "支付", "库存"],
        desc: "完整电商解决方案"
      },
      {
        title: "新西兰美容沙龙",
        category: "美容",
        image: "/Beauty Salon.jpeg",
        tags: ["预订", "相册", "移动端"],
        desc: "优雅美容沙龙网站"
      }
    ],
    cta: "查看更多项目"
  }
};

export default function Portfolio() {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const savedLang = localStorage.getItem('webmate-language') || 'en';
    setLanguage(savedLang);

    const handleLanguageChange = (e) => setLanguage(e.detail);
    window.addEventListener('languageChange', handleLanguageChange);
    return () => window.removeEventListener('languageChange', handleLanguageChange);
  }, []);

  const t = content[language];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#1E3A8A] to-[#059669] bg-clip-text text-transparent">
              {t.hero.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.hero.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group rounded-2xl overflow-hidden bg-white border border-gray-200 hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <Button variant="secondary" size="sm" className="gap-2">
                      <ExternalLink className="w-4 h-4" />
                      {language === 'en' ? 'View Project' : '查看项目'}
                    </Button>
                  </div>
                </div>
                
                <div className="p-6">
                  <Badge variant="secondary" className="mb-3">
                    {project.category}
                  </Badge>
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.desc}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}