#coding=utf8
# 二分查找
def binary_search(list, item):
    low = 0
    high = len(list) -1 # 最后一个位置
    temp = 0

    while(low <= high):
        temp = temp + 1
        mid = (low + high) / 2
        guest = list[mid]
        if(guest == item):
            return [mid, temp]
        if guest < item:
            low = mid + 1
        else:
            high = mid - 1
    return None

my_list = [1,2,4,5,8,9,13,15, 20]

print binary_search(my_list, 13)
            