//
//  ViewController.m
//  JSPatchDemo
//
//  Created by libertyAir on 2017/3/2.
//  Copyright © 2017年 libertyAir. All rights reserved.
//

#import "ViewController.h"

@interface ViewController ()<UITableViewDelegate,UITableViewDataSource>

@property (nonatomic,weak)UITableView *tableView;
@property (nonatomic,strong)NSMutableArray *dataArray;

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view, typically from a nib.
    
    UITableView *tableView = [[UITableView alloc]initWithFrame:self.view.frame style:UITableViewStylePlain];
    self.tableView = tableView;
    tableView.dataSource = self;
    tableView.delegate = self;
    [self.view addSubview:tableView];
}

#pragma mark - UITableViewDelegate,UITableViewDataSource
- (NSInteger)tableView:(UITableView *)tableView numberOfRowsInSection:(NSInteger)section{
    return self.dataArray.count;
}

- (UITableViewCell *)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath{
    NSString *key = @"cell";
    UITableViewCell *cell = [tableView dequeueReusableCellWithIdentifier:key];
    if (!cell) {
        cell = [[UITableViewCell alloc]initWithStyle:UITableViewCellStyleDefault reuseIdentifier:key];
    }
    
    cell.textLabel.text = self.dataArray[indexPath.row];
    
    return cell;
}

- (void)tableView:(UITableView *)tableView didSelectRowAtIndexPath:(NSIndexPath *)indexPath{
    self.dataArray = [NSMutableArray arrayWithObjects:@"1",@"2", nil];
    NSLog(@"%@",self.dataArray[indexPath.row]);
}

- (NSMutableArray *)dataArray
{
    if (!_dataArray) {
        _dataArray = [NSMutableArray arrayWithObjects:@"1",@"2",@"3", nil];
    }
    return _dataArray;
}

@end
