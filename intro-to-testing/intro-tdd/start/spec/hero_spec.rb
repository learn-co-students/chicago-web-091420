require_relative "../config/environment.rb"

describe Hero do
    ability_name1 = "Super Strength"
    ability_name2 = "Flight"
    ability_name3 = "Lightning Blast"
    subject = Hero.new([
        {
            name: ability_name1,
            coolness: 3
        },
        {
            name:ability_name2,
            coolness: 5
        },
        {
            name: ability_name3,
            coolness: 10
        } 
    ])

    describe "#coolest_ability" do
        it "should return hero's coolest ability" do
            expected_ability = {
                name: ability_name3,
                coolness: 10
            }

            expect(subject.coolest_ability).to eq(expected_ability)
        end
    end

    describe "#ability_names" do
        it "should return a list of ability names" do
            
            expect(subject.ability_names).to include(ability_name3, ability_name2, ability_name1)
        end
    end

    describe "#ordered_abilities" do
        it "should return a list of ability names in alphabetical order" do
            expected_list = [ability_name2, ability_name3, ability_name1]

            expect(subject.ordered_abilities).to eq(expected_list)
        end
    end

    describe "#add_ability" do
        it "should add the ability to the subject's abilities" do
            new_ability = {
                name: "Hammer Call",
                coolness: 9
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