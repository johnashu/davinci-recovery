SELECT * FROM nfts
-- WHERE id = '39465198455048158996934387703614038504698458278'
WHERE image IS NOT NULL 
-- AND collection IS NOT NULL 
AND   collection = '0x1548c6227CBD78E51eB0A679c1f329B9a5a99BEb' -- davinci contract