//main.js

//JSPatch文档:https://github.com/bang590/JSPatch/wiki/JSPatch-%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95
//博客详解：http://godfeng.com

/* 热修复一:修改数据源防止crash */
defineClass("ViewController",
            {
                tableView_didSelectRowAtIndexPath:function(tableView,indexPath){
                    tableView.deselectRowAtIndexPath_animated(indexPath,true);
                    self.setDataArray(new Array("Saab","Volvo","BMW"));
//                    console.log(indexPath.row());
                    var dataArray = self.dataArray();
                    console.log(self.dataArray().objectAtIndex(indexPath.row()));
                }
            }
            )



/* 热修复二:给要修改的类增加protocol里的方法 */
defineClass("ViewController:UIViewController<UITableViewDelegate>",
            {
                tableView_heightForRowAtIndexPath:function(tableView,indexPath){
                    return 150;
                }
            }
            )


/* 热修复三:Protocol */
require("UIAlertView");
defineClass("ViewController:UIViewController<UIAlertViewDelegate>",
            {
                viewDidAppear:function(animated){
                    var alertView = UIAlertView.alloc().initWithTitle_message_delegate_cancelButtonTitle_otherButtonTitles("提示","热修复三",self,"OK",null);
                    alertView.show();
                },
                alertView_clickedButtonAtIndex: function(alertView, buttonIndex) {
                    console.log('clicked index is ' + buttonIndex);
                }

            })

/* 热修复四:在已有的方法中添加代码 */
/*
defineClass("ViewController",
            {
                viewDidLoad:function(){
                    self.ORIGviewDidLoad();  //在方法名前加 ORIG 即可调用未覆盖前的 OC 原方法
                    self.tableView().setTableFooterView(require("UIView").alloc().init());
                }
            }
            )
*/

/* 热修复五: 动态新增 Property (id类型)*/
defineClass("ViewController",
            ["dataSource","totalCount"],
            {
                init:function(){
                    self = self.super().init();
                    self.setDataSource(["a","b"]);
                    self.setTotalCount(2);
                    return self;
                },
                viewDidLoad:function(){
                    self.ORIGviewDidLoad();
                    console.log(self.dataSource(),self.totalCount());
                }
            }
            )












