# rubocop:disable Layout/LineLength
require 'rails_helper'
RSpec.describe 'get a single player', type: :request do
  let(:user) { User.create(id: '1', username: 'Peter', email: 'peter@example.com', password: 'password') }
  let!(:player) do
    Player.create(id: 1, name: 'Mark J Williams',
                  nationality: 'Wales',
                  born: '1975-03-21',
                  firstseason: '1992',
                  info: 'Ranking titles: 22
    Triple Crown wins: Seven (Three World Championship, two UK Championships, two Masters)

    Career highlights

    1996: Wins his first two ranking titles, at the Welsh Open and Grand Prix
    1998: Beats Stephen Hendry 10-9 in the famous re-spotted black Masters final at Wembley
    1999: Wins the UK Championship for the first time
    2000: Wins his first World Championship title, coming from 13-7 down to beat Matthew Stevens 18-16 in an all-Welsh final
    2003: Wins second world title, beating Ken Doherty 18-16 in the Crucible final.  Becomes the third player, after Steve Davis and Stephen Hendry, to win the World, UK and Masters titles in the same season.
    2005: Makes his first 147 at the Crucible, worth a handy £161,000
    2011: Wins the 18th world ranking title of his career at the German Masters
    2017: Secures his first ranking event victory in six years at the Northern Ireland Open, beating Yan Bingtao 9-8 in the final
    2018: Wins the German Masters. Wins the World Championship for the third time, beating John Higgins 18-16 in one of the all-time great Crucible  finals. At the age of 43, becomes the oldest winner since Ray Reardon in 1978. Joins Mark Selby and John Spencer on three world titles. Wins the Yushan World Open in China, his 22nd career ranking title.

    ',
                  image: 'http://snooker.org/img/players/MarkWilliams.png',
                  ranking: 10,
                  rate: '$ 154/hr')
  end

  before do
    sign_in user
    get '/api/v1/players/1'
  end

  it 'returns http success' do
    expect(response).to have_http_status(:success)
  end

  it 'JSON body response contains expected player attributes' do
    json_response = JSON.parse(response.body)
    expect(json_response.keys).to match_array(%w[id name info image ranking rate born firstseason nationality trainings])
  end

  it 'returns the name' do
    expect(JSON.parse(response.body)['name']).to eq('Mark J Williams')
  end

  it 'returns the nationality' do
    expect(JSON.parse(response.body)['nationality']).to eq('Wales')
  end

  it 'returns the DOB' do
    expect(JSON.parse(response.body)['born']).to eq('1975-03-21')
  end

  it 'returns the first season as pro' do
    expect(JSON.parse(response.body)['firstseason']).to eq('1992')
  end

  it 'returns the ranking' do
    expect(JSON.parse(response.body)['ranking']).to eq(10)
  end

  it 'returns the rate' do
    expect(JSON.parse(response.body)['rate']).to eq('$ 154/hr')
  end

  it 'returns the image' do
    expect(JSON.parse(response.body)['image']).to eq('http://snooker.org/img/players/MarkWilliams.png')
  end
end

# rubocop:enable Layout/LineLength
