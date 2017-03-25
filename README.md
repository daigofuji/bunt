# bunt
Everything you wanted to know about MLB sacrifice hits, also known as BUNT. My 2017 Baseball Hack Day submission. http://baseballhackday.com/boston

Source here: [MLB.com sortable stats](http://mlb.mlb.com/stats/sortable.jsp#elem=%5Bobject+Object%5D&tab_level=child&click_text=Sortable+Team+hitting&game_type='R'&season=2016&season_type=ANY&league_code='MLB'&sectionType=st&statType=hitting&page=1&ts=1490465054901&sortColumn=sac&sortOrder='desc'&extended=1&playerType=QUALIFIER&sportCode='mlb'&split=&team_id=&active_sw=&position=&page_type=SortablePlayer&results=&perPage=50&timeframe=&last_x_days=)

## Dev notes

Run gulp to compile css from sass by simply run `gulp` or `npm start` from your terminal within your repo. 
It will launch watch by default. <code>control-c</code> to stop. If you only want the css compiled once, run `gulp sass`

To run jekyll locally to test your website while developing, run `bundle install` then `bundle exec jekyll serve --watch` (Requires ruby *) Your website should be viewable by going to [localhost:4000](http://localhost:4000/)
