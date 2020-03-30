function binary_search(list, item) {
    if(!list.length) return null;
    let low = 0;
    let high = list.length - 1;
    let count = 0;
    let mid;
    while(low <= high) {
        count++;
        mid = parseInt((low + high) / 2);
        let guest = list[mid]
        console.log('mid-->', guest, mid);
        if(guest === item) {
            return [mid, count];
        } else if(guest < item) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return null;
}

const my_list = [1,2,4,5,8,9,13,15,20];
console.log('binary_search -->',binary_search(my_list, 8))