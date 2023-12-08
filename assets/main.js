// Kiểm tra hỗ trợ Web Serial API
if ('serial' in navigator) {
  const connectButton = document.getElementById('connectButton'); // ID của nút kết nối
  let serialPort;

  // Xử lý sự kiện khi người dùng nhấp chuột vào nút kết nối
  connectButton.addEventListener('click', async () => {
    try {
      // Yêu cầu truy cập cổng serial
      serialPort = await navigator.serial.requestPort();
      
      // Mở kết nối với cổng serial
      await serialPort.open({ baudrate: 9600 }); // Thay đổi baudrate theo thiết lập của bạn

      // Kiểm tra đã kết nối thành công
      if (serialPort.readable && serialPort.writable) {
        console.log('Đã kết nối thành công với cổng serial.');
        // Bạn có thể bắt đầu đọc hoặc gửi dữ liệu ở đây
      } else {
        console.error('Không thể đọc hoặc ghi vào cổng serial.');
      }
    } catch (err) {
      console.error('Lỗi khi yêu cầu truy cập cổng serial:', err);
    }
  });
} else {
  console.error('Trình duyệt không hỗ trợ Web Serial API.');
}
