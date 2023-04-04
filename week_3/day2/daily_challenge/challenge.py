class Pagination:
    def __init__(self, items=None, pageSize=10):
        self.currentPage = 1
        self.pageSize = int(pageSize)
        self.items = items
        if items is None:
            self.items = []
        self.totalPages = (len(self.items) - 1) // pageSize + 1

    def prevPage(self):
        if self.currentPage > 0:
            self.currentPage -= 1
        return self

    def nextPage(self):
        lastPage = len(items) // self.pageSize
        if self.currentPage < lastPage:
            self.currentPage += 1
        return self

    def lastPage(self):
        self.currentPage = len(items) // self.pageSize
        return self

    def firstPage(self):
        self.currentPage = 0
        return self

    def goToPage(self, pageNum):
        self.currentPage = pageNum
        if pageNum < 1:
            self.currentPage = 1
        if pageNum > self.totalPages:
            self.currentPage = self.totalPages
        return self

    def getVisibleItems(self):
        begin = self.pageSize * (self.currentPage - 1)
        end = min(len(self.items), self.pageSize * self.currentPage)
        return self.items[begin: end]

if __name__ == "__main__":
    items = list(range(26))
    pagination = Pagination(items)
    print(pagination.getVisibleItems())
    pagination.goToPage(10)
    print(pagination.getVisibleItems())
    pagination.prevPage().prevPage()
    print(pagination.getVisibleItems())
    pagination.nextPage()
    print(pagination.getVisibleItems())
