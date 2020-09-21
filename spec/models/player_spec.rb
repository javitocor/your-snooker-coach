require 'rails_helper'
require 'capybara/rspec'
RSpec.describe Player, type: :model do
  context 'Player associations tests' do
    it { should have_many(:trainings) }
  end
  context 'Validations for player' do
    it { should validate_presence_of(:name) }
    it { should validate_presence_of(:nationality) }
    it { should validate_presence_of(:born) }
    it { should validate_presence_of(:firstseason) }
    it { should validate_presence_of(:image) }
    it { should validate_presence_of(:info) }
    it { should validate_presence_of(:ranking) }
    it { should validate_presence_of(:rate) }
  end
end
