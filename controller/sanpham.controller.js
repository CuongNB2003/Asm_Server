exports.listSanPham = (req, res, next) =>{ 
    var tieuDe = 'Danh Sách Sản Phẩm';
    res.render('sanpham/sanpham', {title: tieuDe})
}

exports.addSanPham = (req, res, next) =>{ 
    var tieuDe = 'Thêm Sản Phẩm';
    res.render('sanpham/sanphamAdd', {title: tieuDe})
}