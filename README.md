# Sake Calculator

Máy tính khoa học và phòng luyện giải toán bằng máy tính cầm tay dành cho học sinh. Ứng dụng chạy trên trình duyệt, không quảng cáo, không tài khoản và không thu thập dữ liệu cá nhân.

> Ứng dụng luyện tập độc lập, không liên kết hoặc được bảo trợ bởi CASIO. Điện thoại không thay thế máy tính được phép sử dụng trong kỳ thi.

## Giai đoạn 1

- Bộ tính biểu thức an toàn, không dùng `eval()`.
- Thứ tự phép tính, ngoặc, phần trăm, lũy thừa, căn, giai thừa và Ans.
- sin, cos, tan, log, ln với DEG/RAD.
- 5 chủ đề và ít nhất 50 biến thể bài: tính nhanh, phân số, lũy thừa, số học, lượng giác.
- Ba cấp gợi ý, lời giải và chuỗi phím đề xuất.
- XP, chuỗi ngày, thống kê từng chủ đề và sao lưu JSON.
- Giao diện responsive, PWA ngoại tuyến, kiểm thử CI và GitHub Pages.

## Chạy và kiểm thử

```bash
npm test
python3 -m http.server 8000
```

Mở `http://localhost:8000`. Điều khiển máy tính bằng số/toán tử; Enter để tính, Backspace để xóa, Escape để xóa hết.

## GitHub Pages

Workflow tự kiểm thử và triển khai nhánh `main`. Trong **Settings → Pages**, chọn **GitHub Actions** làm Source nếu cần. Địa chỉ dự kiến:

https://minhtitan86-debug.github.io/sake-calculator/

## Cấu trúc

- `js/engine.js`: bộ phân tích và tính biểu thức
- `js/questions.js`: sinh/chấm bài
- `js/storage.js`: tiến độ cục bộ
- `js/app.js`: giao diện
- `tests/`: kiểm thử Node.js

## Tiếp theo

Phương trình, hệ phương trình, bảng giá trị, thống kê, thi thử, ma trận, vector và số phức sẽ được triển khai trong các giai đoạn sau.
