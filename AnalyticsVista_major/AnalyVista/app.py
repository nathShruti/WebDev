from modules.corelation import corelation
from modules.sales_vs_returns import sales_vs_returns
from modules.gross_sales import gross_sales
from flask import Flask, request, render_template
import pandas as pd
import matplotlib
matplotlib.use('Agg')


app = Flask(__name__)
app.config['STATIC_FOLDER'] = 'static'


@app.route('/', methods=['GET', 'POST'])
def home():
    result = []
    if request.method == 'GET':
        return render_template('home.html')
    else:
        file = request.files['file']
        # reading the file and renaming the columns for efficiency
        sales = pd.read_csv(file)
        sales = sales.dropna()
        sales.columns = ['product_type', 'net_quantity',
                         'gross_sales', 'discounts', 'returns', 'total_net_sales']

        result.append(gross_sales(app, sales))
        result.append(sales_vs_returns(app, sales))
        result.append(corelation(app, sales))

        return render_template('home.html', result=result)

if __name__ == '__main__':
    app.run()
