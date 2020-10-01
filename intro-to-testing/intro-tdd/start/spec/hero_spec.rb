require_relative "../config/environment.rb"

describe Hero do
    subject = Hero.new([ 
        {
            name: "Super Strength",
            coolness: 3
        },
        {
            name:"Flight",
            coolness: 5
        },
        {
            name: "Lighting Blast",
            coolness: 10
        }
    ])

    describe "#coolest_ability" do
        it "should return hero's coolest ability" do
            expected_ability = {
                name: "Lighting Blast",
                coolness: 10
            }
            
            expect(subject.coolest_ability).to eq(expected_ability)
        end
    end

    describe "#ability_names" do
        it "should return a list of ability names" do
            expect(subject.ability_names).to include("Flight", "Lighting Blast", "Super Strength")
        end
    end

    describe "#ordered_abilities" do
        it "should return a list of ability names in alphabetical order" do
           expected_list = ["Flight", "Lighting Blast", "Super Strength"]
           
           expect(subject.ordered_abilities).to eq(expected_list)
        end
    end

    describe "#add_ability" do
        

        it 'should add the ability to the subjects abilities' do
            new_ability = {
                name: 'Hammer Call',
                coolness: 10
            }

            subject.add_ability(new_ability)

            expect(subject.abilities).to include(new_ability) 
        end

        it "should not add an ability if it is not a hash" do
            new_ability = "Hammer Call"

            subject.add_ability(new_ability)
            expect(subject.abilities).to_not include(new_ability) 
        end
    end
end