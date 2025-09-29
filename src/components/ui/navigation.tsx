import { Button } from "@/components/ui/button";

const Navigation = () => {
  const navItems = [
    { label: "Trang Chủ", href: "#home" },
    { label: "Lịch Sử Việt Nam", href: "#vietnam" },
    { label: "Thế Chiến", href: "#world-wars" },
    { label: "Quân Sự Hiện Đại", href: "#modern" },
    { label: "Bảo Tàng", href: "#museum" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-accent rounded-full"></div>
            <h1 className="text-xl font-bold text-foreground">Lịch Sử Quân Sự</h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.label}
                variant="ghost"
                className="text-foreground hover:text-accent hover:bg-accent/10"
                asChild
              >
                <a href={item.href}>{item.label}</a>
              </Button>
            ))}
          </div>
          
          <Button variant="outline" className="md:hidden">
            Menu
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;