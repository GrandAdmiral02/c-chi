import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import vietnameseWarriors from "@/assets/vietnamese-warriors.jpg";
import wwiiEquipment from "@/assets/wwii-equipment.jpg";

const FeaturedSection = () => {
  const features = [
    {
      title: "Lịch Sử Việt Nam",
      description: "Tìm hiểu về các cuộc kháng chiến vĩ đại của dân tộc Việt Nam qua các thời kỳ.",
      image: vietnameseWarriors,
      category: "Lịch sử dân tộc"
    },
    {
      title: "Thế Chiến Thứ II",
      description: "Khám phá các sự kiện, nhân vật và vũ khí trong cuộc chiến tranh lớn nhất lịch sử.",
      image: wwiiEquipment,
      category: "Lịch sử thế giới"
    },
    {
      title: "Quân Sự Hiện Đại",
      description: "Tìm hiểu về sự phát triển của quân sự và công nghệ quốc phòng hiện đại.",
      image: vietnameseWarriors,
      category: "Công nghệ quân sự"
    }
  ];

  return (
    <section id="featured" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Chủ Đề <span className="text-accent">Nổi Bật</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Khám phá những chủ đề hấp dẫn về lịch sử và quân sự
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className="group hover:shadow-military transition-all duration-300 transform hover:-translate-y-2 bg-card border-border overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {feature.category}
                  </span>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl text-foreground group-hover:text-accent transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
                <Button 
                  variant="outline" 
                  className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                >
                  Tìm Hiểu Thêm
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;