import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TimelineSection = () => {
  const timelineEvents = [
    {
      year: "1945",
      title: "Cách Mạng Tháng Tám",
      description: "Cuộc Cách mạng Tháng Tám thành công, Việt Nam giành được độc lập."
    },
    {
      year: "1954",
      title: "Chiến Thắng Điện Biên Phủ",
      description: "Chiến thắng quyết định chấm dứt ách thống trị của thực dân Pháp."
    },
    {
      year: "1975",
      title: "Giải Phóng Miền Nam",
      description: "Cuộc kháng chiến chống Mỹ thành công, thống nhất đất nước."
    },
    {
      year: "1979",
      title: "Chiến Tranh Biên Giới",
      description: "Bảo vệ chủ quyền lãnh thổ và nhân dân vùng biên giới phía Bắc."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Dòng Thời Gian <span className="text-accent">Lịch Sử</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Những mốc son quan trọng trong lịch sử quân sự Việt Nam
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-accent"></div>
          
          {timelineEvents.map((event, index) => (
            <div 
              key={event.year}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'justify-start' : 'justify-end'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-accent rounded-full border-4 border-background z-10"></div>
              
              {/* Content Card */}
              <Card className={`w-full max-w-md ${index % 2 === 0 ? 'mr-auto pr-8' : 'ml-auto pl-8'} shadow-military hover:shadow-glow transition-all duration-300`}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <span className="text-2xl font-bold text-accent">{event.year}</span>
                    <span className="text-xl text-foreground">{event.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{event.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;