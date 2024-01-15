import express from "express"
import { kelilingLingkaran, luasLingkaran, luasPersegi, kelilingPersegi, luasPersegiPanjang, kelilingPersegiPanjang, luasSegitiga} from "../controller/bangunDatar"
import { validateLingkaran } from "../middleware/validateLingkaran"
import { validatePersegi } from "../middleware/validatePersegi"
import { validatePersegiPanjang } from "../middleware/validatePersegiPanjang"
import { validateSegitiiga } from "../middleware/validateSegitiga"
const app = express()

// allow read a body
app.use(express.json())

// fungsi use() digunakan
// untuk menerapkan sebuah fungsi
// pada object express. fungsi tsb akan
// otomatis dijalankan


app.post(`/lingkaran/luas`, validateLingkaran,luasLingkaran,)
app.post(`/lingkaran/keliling`, validateLingkaran,kelilingLingkaran,)
app.post(`/persegi/luas`, validatePersegi,luasPersegi,)
app.post(`/persegi/keliling`, validatePersegi,kelilingPersegi,)
app.post(`/persegiPanjang/luas`, validatePersegiPanjang,luasPersegiPanjang,)
app.post(`/persegiPanjang/keliling`, validatePersegiPanjang,kelilingPersegiPanjang,)
app.post(`/segitiga/luas`, validateSegitiiga,luasSegitiga,)

export default app