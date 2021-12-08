'clear'
'sdfopen D:\DATA_G_LAINNYA\Data_Grads\Project\Proj2-Tugas5Fiswan\suhu_etal.nc'
'q file'
'set z 1 15'
'set lat 1.43'
'set lon 101.3'
'set timelab off'
'set grads off'
'd w'
'draw title Profil Vertical Velocity Desa Bumbung \ Periode Waktu 22 September 2020 06 UTC'
'draw xlab Vertical Velocity (Pa/s)'
'draw ylab Tekanan Udara (hPa)'
'printim D:\DATA_G_LAINNYA\Data_Grads\Project\Proj2-Tugas5Fiswan\VertiVel.png white'

'clear'

'set timelab off'
'set grads off'
'd t-273'
'draw title Profil Suhu Desa Bumbung \ Periode Waktu 22 September 2020 06 UTC'
'draw xlab Suhu (C)'
'draw ylab Tekanan Udara (hPa)'
'printim D:\DATA_G_LAINNYA\Data_Grads\Project\Proj2-Tugas5Fiswan\Suhu.png white'

'clear'

'set timelab off'
'set grads off'
'd q*1000'
'draw title Profil Kelembaban Spesifik Desa Bumbung \ Periode Waktu 22 September 2020 06 UTC'
'draw xlab  Kelembababan Spesifik (g/kg)'
'draw ylab Tekanan Udara (hPa)'
'printim D:\DATA_G_LAINNYA\Data_Grads\Project\Proj2-Tugas5Fiswan\SpecHum.png white'

'clear'

'set timelab off'
'set grads off'
'd r'
'draw title Profil Kelembaban Relatif Desa Bumbung \ Periode Waktu 22 September 2020 06 UTC'
'draw xlab  Kelembababan Relatif (%)'
'draw ylab Tekanan Udara (hPa)'
'printim D:\DATA_G_LAINNYA\Data_Grads\Project\Proj2-Tugas5Fiswan\RelHum.png white'
'reset'





