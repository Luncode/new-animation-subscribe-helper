const { app, BrowserWindow, Menu } = require("electron");
const path = require("path");
const NODE_ENV = process.env.NODE_ENV;
process.env["ELECTRON_DISABLE_SECURITY_WARNINGS"] = "true";

function createWindow() {
  // 创建浏览器窗口
  const mainWindow = new BrowserWindow({
    width: 1100,
    height: 600,
    minHeight: 600,
    minWidth: 1100,
    webPreferences: { webSecurity: false },
  });

  // 加载
  mainWindow.loadURL(
    NODE_ENV === "development"
      ? "http://localhost:3000/"
      : `file://${path.join(__dirname, "../dist/index.html")}`
  ,{userAgent: 'Luncode'});
  // 打开开发工具
  if (NODE_ENV === "development") {
    mainWindow.webContents.openDevTools();
  }
}
// 这段程序将会在 Electron 结束初始化
// 和创建浏览器窗口的时候调用
// 部分 API 在 ready 事件触发后才能使用。
app.whenReady().then(() => {
  createWindow();

  app.on("activate", function () {
    // 通常在 macOS 上，当点击 dock 中的应用程序图标时，如果没有其他
    // 打开的窗口，那么程序会重新创建一个窗口。
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// 除了 macOS 外，当所有窗口都被关闭的时候退出程序。 因此，通常对程序和它们在
// 任务栏上的图标来说，应当保持活跃状态，直到用户使用 Cmd + Q 退出。
app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});

Menu.setApplicationMenu(null);
app.setAppUserModelId("新番订阅助手 - (^///^)");
