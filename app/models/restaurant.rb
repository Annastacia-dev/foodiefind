class Restaurant < ApplicationRecord

    has_many :reviews

    has_many :users, through: :reviews


    def price_range_dollars
        price_range = self.price_range
        price_range = price_range.split("-")
        price_range = price_range[1].to_i
        price_range = price_range / 3000
        price_range = "$" * price_range
        price_range
    end
   

end
