// 匿名回调函数，添加提示框，说明相应功能正在开发中
addSkillBtn.addEventListener('click', () => {
// TODO: 添加新的技能
alert('添加技能功能正在开发中！');
});

viewHistoryBtn.addEventListener('click', () => {
// TODO: 查看更多比赛经历
alert('更多比赛经历功能正在开发中！');
});

modifyContactBtn.addEventListener('click', () => {
// TODO: 添加或修改联系方式
alert('联系方式功能正在开发中！');
});

modifyStatusBtn.addEventListener('click', () => {
// TODO: 修改状态描述
alert('状态描述功能正在开发中！');
});

openChannelBtn.addEventListener('click', () => {
// TODO: 开通沟通渠道
alert('沟通渠道功能正在开发中！');
});

viewPointsBtn.addEventListener('click', () => {
// TODO: 查看个人积分量化排名
alert('个人积分量化功能正在开发中！');
});

// 点击“添加技能”按钮，执行 addSkill() 函数
document.querySelector('button.skills').addEventListener('click', addSkill);

// 点击“查看更多经历”按钮，执行 showMoreHistory() 函数
document.querySelector('#history button:first-of-type').addEventListener('click', showMoreHistory);

// 点击“添加比赛”按钮，执行 addCompetition() 函数
document.querySelector('#history button:nth-of-type(2)').addEventListener('click', addCompetition);

// 点击“提交参赛佐证资料”按钮，执行 uploadProof() 函数
document.querySelector('#history button:last-of-type').addEventListener('click', uploadProof);

// 点击“添加/修改”按钮，执行 addOrEditContact() 函数
document.querySelector('#contact button').addEventListener('click', addOrEditContact);

// 点击“修改”按钮，执行 editStatus() 函数
document.querySelector('#status button').addEventListener('click', editStatus);

// 点击“开通”按钮，执行 openChannel() 函数
document.querySelector('#channel button').addEventListener('click', openChannel);

// 点击“查看具体排行”按钮，执行 viewRanking() 函数
document.querySelector('#points button').addEventListener('click', viewRanking);

// 监听表单提交事件，执行 saveAccount() 函数
document.querySelector('form').addEventListener('submit', saveAccount);

// 监听“个人信息”复选框状态改变事件，显示/隐藏“修改”按钮
document.querySelector('#modify-info-checkbox').addEventListener('change', function() {
document.querySelector('#modify-info-btn').style.display = this.checked ? 'inline-block' : 'none';
});

// 点击“修改”按钮，执行 modifyAccount() 函数
document.querySelector('#modify-info-btn').addEventListener('click', modifyAccount);

// 点击“注销账号”按钮，执行 logoutAccount() 函数
document.querySelector('.btn-group button:first-of-type').addEventListener('click', logoutAccount);

// 点击“修改密码/找回密码”按钮，执行 changePassword() 函数
document.querySelector('.btn-group button:nth-of-type(2)').addEventListener('click', changePassword);

// 点击“更改头像”按钮，执行 changeAvatar() 函数
document.querySelector('.btn-group button:last-of-type').addEventListener('click', changeAvatar);

// TODO：在此处以下为函数定义部分

/**

添加技能的函数 */ function addSkill() {
    // TODO：在此处添加代码，实现添加个人技能的功能 
}
// 匿名回调函数，添加提示框，说明相应功能正在开发中
addSkillBtn.addEventListener('click', () => {
    // TODO: 添加新的技能
    alert('添加技能功能正在开发中！');
    });
/**

显示更多比赛经历的函数 */ function showMoreHistory() {
    // TODO：在此处添加代码，实现展示更多比赛经历的功能 
}
/**

添加比赛的函数 */ function addCompetition() {
    // TODO：在此处添加代码，实现添加比赛经历的功能 
}
/**

上传参赛佐证资料的函数 */ function uploadProof() {
    // TODO：在此处添加代码，实现上传参赛佐证资料的功能 
}
/**

添加或修改联系方式的函数 */ function addOrEditContact() {
    // TODO：在此处添加代码，实现添加或修改联系方式的功能 
}

/**

修改状态描述的函数 */ function editStatus() {
    // TODO：在此处添加代码，实现修改状态描述的功能 
}
/**

开通沟通渠道的函数 */ function openChannel() {
    // TODO：在此处添加代码，实现开通沟通渠道的功能
    }
/**

查看个人积分排名的函数 */ function viewRanking() {
    // TODO：在此处添加代码，实现查看个人积分排名的功能
    }
/**

保存账户信息的函数
@param {Event} event 表单提交事件对象 */ function saveAccount(event) { event.preventDefault(); // 阻止表单默认提交行为
// TODO：在此处添加代码，实现保存账户信息的功能
}

/**

修改账户信息的函数 */ function modifyAccount() {
    // TODO：在此处添加代码，实现修改账户信息的功能 
}
/**

注销账户的函数 */ function logoutAccount() {
    // TODO：在此处添加代码，实现注销账户的功能
    }
/**

修改密码/找回密码的函数 */ function changePassword() {
    // TODO：在此处添加代码，实现修改密码/找回密码的功能 
}
/**

更改头像的函数 */ function changeAvatar() {
    // TODO：在此处添加代码，实现更改头像的功能
}
    
//thrid-teacher
// 获取下拉菜单的按钮和容器
const statusBtn = document.querySelector('#statusDropdown');
const statusMenu = document.querySelector('.dropdown-menu');

// 监听菜单项的点击事件
statusMenu.addEventListener('click', (event) => {
  // 阻止默认的跳转行为
  event.preventDefault();
  // 获取被点击的菜单项的文本内容
  const selectedStatus = event.target.textContent;
  // 将选中项的内容显示在按钮上
  statusBtn.textContent = selectedStatus;
});

/*2023.6.1 
6.3前目标效果：各用户界面显示所有功能并响应--竞赛生界面响应不成功，其他页面调整功能展示中
1.老师页面状态选择  2.增加个人账户信息是否修改选项
3.企业后几个功能没有且导航不成功  4.企业个人账户问题最后模块且同2
5.
            */