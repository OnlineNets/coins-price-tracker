// TradingViewWidget.js
import React from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import { WebView } from 'react-native-webview';

const TradingViewWidget = () => {
  const tradingViewScript = `
    <html>
      <head>
        <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js"></script>
      </head>
      <body>
        <div class="tradingview-widget-container">
          <div id="tradingview_widget"></div>
          <div class="tradingview-widget-copyright">
            <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
              <span class="blue-text">Track all markets on TradingView</span>
            </a>
          </div>
        </div>
        <script type="text/javascript">
          new TradingView.widget({
            "symbols": [
              ["Bitcoin", "BTC|1D"],
              ["Ethereum", "ETH|1D"]
            ],
            "chartOnly": false,
            "width": "100%",
            "height": "100%",
            "locale": "en",
            "colorTheme": "dark",
            "autosize": true,
            "showVolume": false,
            "showMA": false,
            "hideDateRanges": false,
            "hideMarketStatus": false,
            "hideSymbolLogo": false,
            "scalePosition": "right",
            "scaleMode": "Normal",
            "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
            "fontSize": "10",
            "noTimeScale": false,
            "valuesTracking": "1",
            "changeMode": "price-and-percent",
            "chartType": "area",
            "maLineColor": "#2962FF",
            "maLineWidth": 1,
            "maLength": 9,
            "headerFontSize": "medium",
            "lineWidth": 2,
            "lineType": 0,
            "dateRanges": [
              "1d|1",
              "1m|30",
              "3m|60",
              "12m|1D",
              "60m|1W",
              "all|1M"
            ]
          });
        </script>
      </body>
    </html>
  `;

  return (
    <View style={styles.container}>
       <Text>12</Text>
      <WebView
        originWhitelist={['*']}
        source={{ html: tradingViewScript }}
        style={styles.webview}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  webview: {
    flex: 0,
  },
});

export default TradingViewWidget;
