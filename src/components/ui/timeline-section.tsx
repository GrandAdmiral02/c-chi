import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import DetailModal from "@/components/ui/detail-modal";

const TimelineSection = () => {
  const timelineEvents = [
    {
      year: "2879 TCN",
      title: "Vương Quốc Văn Lang",
      description: "Thành lập nhà nước đầu tiên của người Việt cổ dưới thời Hùng Vương.",
      category: "Thời kỳ hình thành",
      warDetails: {
        title: "Thành lập Văn Lang",
        year: "2879 TCN",
        enemy: "Các bộ lạc địa phương",
        commanders: {
          vietnamese: ["Hùng Vương I", "Các tướng lĩnh bộ lạc"],
          enemy: ["Thủ lĩnh các bộ lạc nhỏ"]
        },
        tactics: ["Liên minh bộ lạc", "Ngoại giao hòa bình", "Quản lý thủy lợi"],
        weapons: {
          vietnamese: ["Cung tên đồng", "Giáo mác", "Rìu đá"],
          enemy: ["Vũ khí đá", "Cung tên tre"]
        },
        outcome: "Thống nhất các bộ lạc, thành lập nhà nước Văn Lang",
        significance: "Đánh dấu sự ra đời của nhà nước Việt Nam đầu tiên"
      }
    },
    {
      year: "257 TCN",
      title: "Thục Phán Xây Dựng Âu Lạc",
      description: "Thục Phán đánh bại An Dương Vương, thành lập nhà nước Âu Lạc.",
      category: "Kháng chiến",
      warDetails: {
        title: "Cuộc chiến Thục - Âu Lạc",
        year: "257 TCN",
        enemy: "Nhà nước Âu Lạc",
        commanders: {
          vietnamese: ["Thục Phán (An Dương Vương)"],
          enemy: ["Các thủ lĩnh Âu Việt"]
        },
        tactics: ["Chiến thuật núi rừng", "Sử dụng địa hình", "Nỏ thần"],
        weapons: {
          vietnamese: ["Nỏ thần", "Kiếm đồng", "Thuyền chiến"],
          enemy: ["Cung tên", "Giáo mác", "Khiên tre"]
        },
        outcome: "Thống nhất Văn Lang và Âu Lạc thành Âu Lạc",
        significance: "Mở rộng lãnh thổ, tạo nền tảng cho các triều đại sau"
      }
    },
    {
      year: "40 - 43",
      title: "Khởi Nghĩa Hai Bà Trưng",
      description: "Trưng Trắc và Trưng Nhị khởi nghĩa chống ách thống trị của nhà Hán.",
      category: "Kháng chiến chống Trung Quốc",
      warDetails: {
        title: "Khởi nghĩa Hai Bà Trưng",
        year: "40 - 43",
        enemy: "Nhà Hán (Trung Quốc)",
        commanders: {
          vietnamese: ["Trưng Trắc", "Trưng Nhị", "Phùng Thị Chính"],
          enemy: ["Tô Định", "Mã Viện"]
        },
        tactics: ["Khởi nghĩa đồng loạt", "Chiến tranh du kích", "Sử dụng thủy quân"],
        weapons: {
          vietnamese: ["Kiếm", "Cung tên", "Thuyền chiến", "Giáo"],
          enemy: ["Đại đao Hán", "Nỏ", "Kỵ binh", "Áo giáp sắt"]
        },
        outcome: "Giành độc lập 3 năm, sau đó thất bại",
        significance: "Biểu tượng tinh thần yêu nước, kháng chiến của phụ nữ Việt Nam"
      }
    },
    {
      year: "1076 - 1077",
      title: "Chiến Thắng Như Nguyệt",
      description: "Lý Thường Kiệt đánh bại quân Tống, bảo vệ độc lập dân tộc.",
      category: "Kháng chiến chống Trung Quốc", 
      warDetails: {
        title: "Chiến tranh Lý - Tống",
        year: "1076 - 1077",
        enemy: "Nhà Tống (Trung Quốc)",
        commanders: {
          vietnamese: ["Lý Thường Kiệt", "Nùng Tôn Đản"],
          enemy: ["Quách Quì", "Triệu Tiết"]
        },
        tactics: ["Tấn công phủ đầu", "Chiến tranh đường thủy", "Phòng thủ kiên cố"],
        weapons: {
          vietnamese: ["Thuyền chiến", "Nỏ thần", "Kiếm", "Giáo"],
          enemy: ["Pháo", "Cung nỏ Tống", "Kỵ binh", "Binh khí sắt"]
        },
        outcome: "Đại thắng, bắt sống tướng địch, ký hiệp ước hòa bình",
        significance: "Khẳng định độc lập của Đại Việt trước Trung Quốc"
      }
    },
    {
      year: "1288",
      title: "Chiến Thắng Bạch Đằng",
      description: "Trần Hưng Đạo đánh tan quân Mông Cổ, bảo vệ độc lập dân tộc.",
      category: "Kháng chiến chống Mông Cổ",
      warDetails: {
        title: "Kháng chiến chống Mông - Nguyên",
        year: "1288", 
        enemy: "Đế quốc Mông Cổ - Nguyên",
        commanders: {
          vietnamese: ["Trần Hưng Đạo", "Trần Quang Khải", "Trần Nhật Duật"],
          enemy: ["Thoát Hoan", "Ô Mã Nhi"]
        },
        tactics: ["Cắm cọc Bạch Đằng", "Chiến thuật biển người", "Đánh du kích"],
        weapons: {
          vietnamese: ["Cọc nhọn", "Thuyền chiến", "Cung tên", "Kiếm"],
          enemy: ["Tàu chiến lớn", "Cung nỏ Mông Cổ", "Kỵ binh", "Súng thô sơ"]
        },
        outcome: "Đại thắng hoàn toàn, tiêu diệt hầu hết thủy quân địch",
        significance: "Một trong những chiến thắng vĩ đại nhất lịch sử, khẳng định bất khả xâm phạm của Đại Việt"
      }
    },
    {
      year: "1789",
      title: "Chiến Thắng Ngọc Hồi - Đống Đa",
      description: "Quang Trung đánh tan 29 vạn quân Thanh, giải phóng Thăng Long.",
      category: "Kháng chiến chống Trung Quốc",
      warDetails: {
        title: "Kháng chiến chống Thanh",
        year: "1789",
        enemy: "Nhà Thanh (Trung Quốc)",
        commanders: {
          vietnamese: ["Quang Trung (Nguyễn Huệ)", "Nguyễn Lữ", "Vũ Văn Nhậm"],
          enemy: ["Tôn Sĩ Nghị", "Hứa Thế Hanh"]
        },
        tactics: ["Tấn công đêm Tết", "Chiến thuật tia chớp", "Phối hợp binh chung"],
        weapons: {
          vietnamese: ["Voi chiến", "Súng hỏa mai", "Kiếm giáo", "Pháo"],
          enemy: ["Súng lửa Thanh", "Pháo", "Kỵ binh", "Giáp sắt"]
        },
        outcome: "Đại thắng, tiêu diệt 29 vạn quân Thanh chỉ trong 5 ngày",
        significance: "Chiến thắng nhanh nhất và vĩ đại nhất trong lịch sử kháng chiến chống ngoại xâm"
      }
    },
    {
      year: "1945",
      title: "Cách Mạng Tháng Tám",
      description: "Cách mạng thành công, tuyên bố độc lập, thành lập nước Việt Nam Dân chủ Cộng hòa.",
      category: "Giành độc lập",
      warDetails: {
        title: "Cách mạng Tháng Tám",
        year: "1945",
        enemy: "Đế quốc Nhật Bản",
        commanders: {
          vietnamese: ["Hồ Chí Minh", "Võ Nguyên Giáp", "Trường Chinh"],
          enemy: ["Tsuchihashi Yuichi", "Matsui Takuro"]
        },
        tactics: ["Tổng khởi nghĩa", "Chiến tranh nhân dân", "Ngoại giao"],
        weapons: {
          vietnamese: ["Vũ khí tự chế", "Súng cũ", "Lưỡi lê", "Mác"],
          enemy: ["Súng máy Nhật", "Pháo", "Máy bay", "Tank"]
        },
        outcome: "Giành được chính quyền, tuyên bố độc lập 2/9/1945",
        significance: "Mở ra kỷ nguyên mới của dân tộc Việt Nam"
      }
    },
    {
      year: "1954",
      title: "Chiến Thắng Điện Biên Phủ",
      description: "Đánh bại thực dân Pháp, chấm dứt 80 năm đô hộ.",
      category: "Kháng chiến chống Pháp",
      warDetails: {
        title: "Kháng chiến chống Pháp",
        year: "1954",
        enemy: "Thực dân Pháp",
        commanders: {
          vietnamese: ["Võ Nguyên Giáp", "Hoàng Văn Thái", "Vũ Hiền"],
          enemy: ["Christian de Castries", "Henri Navarre"]
        },
        tactics: ["Bao vây từng bước", "Đào hào tiến công", "Pháo binh tập trung"],
        weapons: {
          vietnamese: ["Pháo 105mm", "Súng cối", "AK-47", "B40"],
          enemy: ["Pháo 155mm", "Máy bay fighter", "Tank M24", "Súng máy"]
        },
        outcome: "Đại thắng hoàn toàn, Pháp ký Hiệp định Geneva",
        significance: "Chấm dứt ách thống trị thực dân, mở đường thống nhất đất nước"
      }
    },
    {
      year: "1975",
      title: "Giải Phóng Miền Nam",
      description: "Chiến dịch Hồ Chí Minh thành công, thống nhất đất nước.",
      category: "Kháng chiến chống Mỹ",
      warDetails: {
        title: "Kháng chiến chống Mỹ",
        year: "1975",
        enemy: "Hoa Kỳ và VNCH",
        commanders: {
          vietnamese: ["Văn Tiến Dũng", "Trần Văn Trà", "Lê Đức Anh"],
          enemy: ["William Westmoreland", "Creighton Abrams", "Nguyễn Văn Thiệu"]
        },
        tactics: ["Chiến tranh nhân dân", "Đường Hồ Chí Minh", "Tết Mậu Thân"],
        weapons: {
          vietnamese: ["T-54", "Katyusha", "AK-47", "B40"],
          enemy: ["M16", "F-4 Phantom", "B-52", "Napalm"]
        },
        outcome: "Thắng lợi hoàn toàn, thống nhất đất nước 30/4/1975",
        significance: "Kết thúc chiến tranh, thống nhất đất nước sau 21 năm chia cắt"
      }
    },
    {
      year: "1979",
      title: "Chiến Tranh Biên Giới",
      description: "Bảo vệ chủ quyền biên giới phía Bắc, đẩy lùi cuộc tấn công.",
      category: "Kháng chiến chống Trung Quốc",
      warDetails: {
        title: "Chiến tranh bảo vệ biên giới phía Bắc",
        year: "1979",
        enemy: "Trung Quốc",
        commanders: {
          vietnamese: ["Văn Tiến Dũng", "Song Hào", "Hoàng Minh Thảo"],
          enemy: ["Xu Shiyou", "Yang Dezhi"]
        },
        tactics: ["Phòng thủ kiên cố", "Phản công cơ động", "Chiến đấu trong thành phố"],
        weapons: {
          vietnamese: ["T-54/55", "AK-47", "B40", "Pháo 130mm"],
          enemy: ["Type 59", "Type 56", "Type 40", "Pháo 122mm"]
        },
        outcome: "Bảo vệ thành công biên giới, Trung Quốc rút quân",
        significance: "Khẳng định quyết tâm bảo vệ chủ quyền lãnh thổ"
      }
    },
    {
      year: "2025",
      title: "Kỷ Nguyên Vươn Mình",
      description: "Việt Nam phát triển mạnh mẽ, trở thành cường quốc khu vực về kinh tế và quốc phòng.",
      category: "Phát triển hiện đại",
      warDetails: {
        title: "Việt Nam hiện đại",
        year: "2025",
        enemy: "Thách thức toàn cầu",
        commanders: {
          vietnamese: ["Lãnh đạo Đảng và Nhà nước", "Các tướng lĩnh hiện đại"],
          enemy: ["Thách thức công nghệ", "Biến đổi khí hậu"]
        },
        tactics: ["Ngoại giao đa phương", "Quốc phòng toàn dân", "Công nghệ cao"],
        weapons: {
          vietnamese: ["Tên lửa hiện đại", "Radar tầm xa", "Máy bay không người lái", "Cyber warfare"],
          enemy: ["Thách thức an ninh mạng", "Khủng bố", "Tranh chấp lãnh thổ"]
        },
        outcome: "Phát triển bền vững, ổn định và thịnh vượng",
        significance: "Khẳng định vị thế Việt Nam trong kỷ nguyên mới"
      }
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Thời kỳ hình thành": return "bg-blue-500/20 text-blue-300";
      case "Kháng chiến chống Trung Quốc": return "bg-red-500/20 text-red-300";
      case "Kháng chiến chống Mông Cổ": return "bg-yellow-500/20 text-yellow-300";
      case "Kháng chiến chống Pháp": return "bg-purple-500/20 text-purple-300";
      case "Kháng chiến chống Mỹ": return "bg-green-500/20 text-green-300";
      case "Giành độc lập": return "bg-accent/20 text-accent";
      case "Phát triển hiện đại": return "bg-cyan-500/20 text-cyan-300";
      default: return "bg-muted/20 text-muted-foreground";
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Dòng Thời Gian <span className="text-accent">Lịch Sử</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Từ Văn Lang cổ đại đến kỷ nguyên vươn mình 2025 - Hành trình bất khuất của dân tộc Việt Nam
          </p>
        </div>
        
        <div className="relative max-w-6xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent via-secondary to-accent animate-pulse-glow"></div>
          
          {timelineEvents.map((event, index) => (
            <div 
              key={event.year}
              className={`relative flex items-center mb-16 ${
                index % 2 === 0 ? 'justify-start' : 'justify-end'
              } animate-fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-accent rounded-full border-4 border-background z-10 animate-pulse-glow hover:scale-110 transition-transform"></div>
              
              {/* Content Card */}
              <Card className={`w-full max-w-lg ${
                index % 2 === 0 ? 'mr-auto pr-12' : 'ml-auto pl-12'
              } shadow-military hover:shadow-glow transition-all duration-500 hover:-translate-y-2 group bg-card/80 backdrop-blur-sm border-accent/20`}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className={getCategoryColor(event.category)}>
                      {event.category}
                    </Badge>
                    <span className="text-3xl font-bold text-accent group-hover:animate-pulse-glow">
                      {event.year}
                    </span>
                  </div>
                  <CardTitle className="text-xl text-foreground group-hover:text-accent transition-colors">
                    {event.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {event.description}
                  </p>
                  
                  <DetailModal warDetails={event.warDetails}>
                    <Button 
                      variant="outline" 
                      className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:shadow-glow group-hover:animate-scale-in"
                    >
                      Chi Tiết Cuộc Chiến 🗡️
                    </Button>
                  </DetailModal>
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