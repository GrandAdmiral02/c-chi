const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-accent rounded-full"></div>
              <h3 className="text-xl font-bold text-foreground">Lịch Sử Quân Sự</h3>
            </div>
            <p className="text-muted-foreground">
              Trang web chia sẻ kiến thức về lịch sử và quân sự, bảo tồn ký ức dân tộc.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Liên Kết</h4>
            <ul className="space-y-2">
              <li><a href="#vietnam" className="text-muted-foreground hover:text-accent transition-colors">Lịch Sử Việt Nam</a></li>
              <li><a href="#world-wars" className="text-muted-foreground hover:text-accent transition-colors">Thế Chiến</a></li>
              <li><a href="#modern" className="text-muted-foreground hover:text-accent transition-colors">Quân Sự Hiện Đại</a></li>
              <li><a href="#museum" className="text-muted-foreground hover:text-accent transition-colors">Bảo Tàng</a></li>
            </ul>
          </div>
          
          {/* Categories */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Chủ Đề</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Chiến Tranh Việt Nam</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Thế Chiến II</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Vũ Khí Cổ Đại</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Anh Hùng Dân Tộc</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Liên Hệ</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>Email: info@lichsuquansu.vn</p>
              <p>Điện thoại: (84) 123-456-789</p>
              <p>Địa chỉ: Hà Nội, Việt Nam</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 Lịch Sử Quân Sự. Tất cả quyền được bảo lưu.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;