import { blackfuryAssetId } from '@shapeshiftoss/caip'

import { Tx } from '../../../generated/blackfury'
import { BaseTransactionParser, TransactionParserArgs } from '../../parser'
import * as erc20 from '../../parser/erc20'
import * as zrx from '../../parser/zrx'

export const ZRX_BLACKFURY_PROXY_CONTRACT = '0xDEF1ABE32c034e558Cdd535791643C58a13aCC10'

export class TransactionParser extends BaseTransactionParser<Tx> {
  constructor(args: TransactionParserArgs) {
    super(args)
    this.assetId = blackfuryAssetId

    this.registerParsers([
      new erc20.Parser({ chainId: this.chainId, provider: this.provider }),
      new zrx.Parser({ proxyContract: ZRX_BLACKFURY_PROXY_CONTRACT }),
    ])
  }
}
