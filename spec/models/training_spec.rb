require 'rails_helper'
require 'capybara/rspec'
RSpec.describe Training, type: :model do
  context 'Training associations tests' do
    it { should belong_to(:user) }
    it { should belong_to(:player) }
  end
  context 'Validations for trainings' do
    it { should validate_presence_of(:date) }
    it { should validate_presence_of(:location) }
    it { should validate_presence_of(:player_id) }
  end
  context 'Testing scopes for trainings' do
    it 'applies a default scope to trainings by most recent' do
      expect(Gambit.all.ordered_by_most_recent.to_sql).to eq Gambit.all.order(created_at: :desc).to_sql
    end
  end
end