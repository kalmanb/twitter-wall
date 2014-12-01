describe('Wall', function() {
  it('should have the correct title', function() {
    browser.get('http://localhost:3000/');
    expect(browser.getTitle()).toEqual('Twitter Wall');
  });
});

