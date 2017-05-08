import { TwitchViewerPage } from './app.po';

describe('twitch-viewer App', () => {
  let page: TwitchViewerPage;

  beforeEach(() => {
    page = new TwitchViewerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
