#include <iostream>

using namespace std;

// 二叉树找固定数的路径
class Solution
{
public:
	std::vector<std::vector<int> >& findpath(Node* root, int sum)
	{
		vector<<vector<int> > res;
		vector<int> once;
		
		if (root)
			res = dfs(root, sum, res, once);
		
		return res;
	}
	
	void dfs(Node* root, int sum, vector<vector<int> >&res, vector<int>& once)
	{
		once.push_back(root->data);
		if (!(root->left || root->right))
		{
			if (sum == root->data)
				res.push_back(once);
		}
		
		if (root->left)
			dfs(root->left, sum - root, res, once);
		if (root->right)
			dfs(root->right, sum - root, res, once);
		
		once.pop_back();
	}
};

／*
	调度算法：
	1.先来先服务
		作业队列，谁先到就先把谁放入内存调用
	2.段作业优先
		从作业队列中找出估计运行时间最短的先放入内存执行
	3.高优先权优先
		选出优先权最高的执行
			3.1非抢占式，就是一旦给这个作业分配内存并且调用，就要等待其结束
			3.2抢占式，调用过程中有优先权更高的，会打断当前作业，执行优先权更高的作业
	4.高响应比优先
		动态计算作业的优先权，等待时间越长，优先权越高
	5.时间片轮转
		按照fcfs执行，一个时间片可以完成就一处作业队列，否则放到队列末尾，执行下一个
	6.多级反馈队列调度
		6.1有多个作业队列，按照优先级分开
		6.2优先级高的队列分配的时间片越少
		6.3新来的作业放到优先级最高的队列
		6.4执行完优先级高的队列所有作业才能执行下一级队列的作业
		6.5当执行某个队列的作业时，有优先级更高的作业，会中断当前作业，区执行优先级更高的作业。时抢占时的
		6.6作业在某个队列的一个时间片没完成，会放到下个队列的末尾
		6.7当再次运行到该作业是，会执行上次时间片剩下的时间，而不是重新分配新的完整的时间片。
	*／
	
／*
	reactor模式：
		是基于事件驱动的，用于同步io，它关注于事件等就绪状态，等就绪了再调用事件处理器处理事件。
	proactor模式：
		他会注册一个事件处理器，这个事件处理器关注等不是io就绪，而是关注等是io读取数据完成。
	reactor和proactor最主要的区别就是真正的读取和写入是谁来完成，reactor应用自己读，proactor不需要操作读取数据，而是直接从缓冲区中取已经读好的数据进行处理。
	*／
	
	僵尸进程：先于父进程结束，等待父进程释放子进程的pcb，但是父进程没有结束，僵尸进程就死了。解决办法：给父进程发送sigchld信号，释放子进程。
	孤儿进程：父进程结束后，子进程还没有结束，就会变成孤儿进程。由init回收。
	
class BitMap
{
public:
	BitMap(int n): m_size(n), m_data(1+n/32)
	{
		
	}
	
	// set 第i位=1，即第i/32个块的 第 i%32个位置位1
	void set(int i)
	{
		m_data[i/32] = m_data[i/32] | (0x01 << (i%32));
	}
	
	// 取第 i 个位置第元素是0还是1，就是取第 i／32个块第第 i%32个位置的数
	int get(int i)
	{
		return m_data[i/32] >> (i%32) & 0x01;
	}
	
	// 将第i个位置清0
	int clr(int i)
	{
		m_data[i/32] & ~(1 << i%32);
	}
private:
	int m_size = 0;
	vector<int> m_data;
};

void swap2(int* arr, int x, int y)
{
	int t = arr[x];
	arr[x] = arr[y];
	arr[y] = t;

	arr[x] ^= arr[y];
	arr[y] ^= arr[x];
	arr[x] ^= arr[y];

}

void allsort(int* arr, int len, int index)
{
	if (!arr)
		return;
	
	if (index == len)
	{
		printarr(arr);
		return;
	}
	
	for (int i = index; i < len; ++i)
	{
		swap2(arr, index, i);
		allsort(arr, len, index + 1);
		swap2(arr, index, i);
	}
}

Node* reverse2(Node* head)
{
	// Nodelist = 1-2-3-4-5
	// after reverse: 2-1-4-3-5
	
	Node* ehead = new Node;
	ehead->next = head;
	while(head && head->next)
	{
		Node* node1 = head;
		Node* node2 = head->next;
		Node* next = node2->next;
		node2->next = node1;
		node1->next = next;
		head = node2;
	}
		
	return head->next;
	
	if (!head || !head->next)
		return head;
	
	Node* next = head->next;
	head->next = reverse2(next->next);
	next->next = head;
	
	return next;
}

int main() {
	cout << "hello https://tool.lu/" << endl;
	return 0;
}
