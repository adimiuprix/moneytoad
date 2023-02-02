  <Box px={3} py={3} align="center">
                <FormControl fullWidth>
                  <Typography variant="h2" color={'#d8dee9'} align="center">
                    ROI caculator
                  </Typography>
                  <Select
                    value={protocol}
                    label="Protocol"
                    width={'70%'}
                    onChange={handleChange}
                    sx={{
                    input: {
                      color: "#d8dee9",
                      border:'0'
                    }
                  }}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Box>