import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import {
  Globe, Smartphone, Search, ShoppingCart, Palette,
  Code, Zap, Shield, TrendingUp, CheckCircle, ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";

const content = {
  en: {
    hero: {
      title: "Comprehensive Web Design Services",
      subtitle: "Everything you need to succeed online, from design to deployment"
    },
    services: [
      {
        icon: Palette,
        title: "Custom Web Design",
        desc: "Unique, brand-focused designs that captivate your audience",
        features: [
          "Bespoke design concepts",
          "Unlimited revisions",
          "Brand identity integration",
          "User experience optimization"
        ]
      },
      {
        icon: Code,
        title: "Web Development",
        desc: "Clean, efficient code built with modern technologies",
        features: [
          "Responsive HTML/CSS/JavaScript",
          "Lightning-fast performance",
          "Cross-browser compatibility",
          "Clean, maintainable code"
        ]
      },
      {
        icon: Search,
        title: "SEO Optimization",
        desc: "Rank higher on Google and drive organic traffic",
        features: [
          "Keyword research & strategy",
          "On-page SEO optimization",
          "Technical SEO audit",
          "Local SEO for NZ businesses"
        ]
      },
      {
        icon: ShoppingCart,
        title: "E-commerce Solutions",
        desc: "Sell online with secure, feature-rich online stores",
        features: [
          "Product catalog management",
          "Secure payment integration",
          "Inventory tracking",
          "Order management system"
        ]
      },
      {
        icon: Smartphone,
        title: "Mobile Optimization",
        desc: "Perfect experience across all devices and screen sizes",
        features: [
          "Mobile-first design approach",
          "Touch-friendly interfaces",
          "Fast mobile loading speeds",
          "App-like user experience"
        ]
      },
      {
        icon: TrendingUp,
        title: "Digital Marketing",
        desc: "Grow your online presence and attract more customers",
        features: [
          "Content strategy",
          "Social media integration",
          "Email marketing setup",
          "Analytics & reporting"
        ]
      }
    ],
    cta: {
      title: "Ready to Start Your Project?",
      button: "Get a Free Consultation"
    }
  },
  zh: {
    hero: {
      title: "全方位网站设计服务",
      subtitle: "从设计到部署，在线成功所需的一切"
    },
    services: [
      {
        icon: Palette,
        title: "定制网站设计",
        desc: "独特、品牌化的设计，吸引您的受众",
        features: [
          "定制设计概念",
          "无限次修改",
          "品牌形象整合",
          "用户体验优化"
        ]
      },
      {
        icon: Code,
        title: "网站开发",
        desc: "使用现代技术构建清晰、高效的代码",
        features: [
          "响应式HTML/CSS/JavaScript",
          "闪电般的性能",
          "跨浏览器兼容性",
          "清晰、可维护的代码"
        ]
      },
      {
        icon: Search,
        title: "SEO优化",
        desc: "在谷歌上排名更高，吸引自然流量",
        features: [
          "关键词研究与策略",
          "页面SEO优化",
          "技术SEO审计",
          "新西兰本地SEO"
        ]
      },
      {
        icon: ShoppingCart,
        title: "电商解决方案",
        desc: "使用安全、功能丰富的在线商店进行销售",
        features: [
          "产品目录管理",
          "安全支付集成",
          "库存跟踪",
          "订单管理系统"
        ]
      },
      {
        icon: Smartphone,
        title: "移动端优化",
        desc: "在所有设备和屏幕尺寸上完美体验",
        features: [
          "移动优先设计方法",
          "触摸友好界面",
          "快速移动加载速度",
          "类似应用的用户体验"
        ]
      },
      {
        icon: TrendingUp,
        title: "数字营销",
        desc: "扩大您的在线影响力，吸引更多客户",
        features: [
          "内容策略",
          "社交媒体整合",
          "邮件营销设置",
          "分析与报告"
        ]
      }
    ],
    cta: {
      title: "准备开始您的项目了吗？",
      button: "获取免费咨询"
    }
  }
};

export default function Services() {
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

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50 border border-blue-100 hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#1E3A8A] to-[#059669] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.desc}</p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-[#059669] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#1E3A8A] to-[#059669] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">{t.cta.title}</h2>
            <Link to={createPageUrl("Contact")}>
              <Button size="lg" className="text-lg px-8 py-6 bg-white text-[#1E3A8A] hover:bg-gray-100 shadow-2xl transform hover:scale-105 transition-all duration-300">
                {t.cta.button}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}