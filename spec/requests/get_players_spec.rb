require 'rails_helper'

RSpec.describe "get all players route", :type => :request do
  let!(:players) {FactoryBot.create_list(:random_player, 20)}
  let(:user) { User.create(id: '1', username: 'Peter', email: 'peter@example.com', password: 'password') }

  before {
    sign_in user
    get '/api/v1/players'
  }

  it 'returns all players' do
      expect(JSON.parse(response.body).size).to eq(20)
  end
  
  it 'returns status code 200' do
    expect(response).to have_http_status(:success)
  end
end