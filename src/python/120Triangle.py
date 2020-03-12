def minimumTotal(triangle):
    if not triangle: return 0

    res = triangle[-1]
    for i in range(len(triangle) -2, -1, -1):
        for j in range(len(triangle[i])):
            res[j] = min(res[j], res[j+1]) + triangle[i][j]

    return res[0]

def minimumTotal1(triangle):
    if not triangle: 
        return 0
    for i in range(len(triangle) -2, -1, -1):
        for j in range(len(triangle[i])):
            triangle[i][j] += min(triangle[i+1][j], triangle[i+1][j+1])
    return triangle[0][0]
result = minimumTotal1([[2],[3,4],[6,5,7],[4,1,8,3]])
print(result)

        